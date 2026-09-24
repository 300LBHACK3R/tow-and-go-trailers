/* Exercise the real API and gallery modules with an isolated mail transport.
   No API keys or network requests are used. Run: node --test scripts/check-service-pathways.mjs */
import assert from 'node:assert/strict';
import test from 'node:test';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';
const requireDependency = createRequire(import.meta.url);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function isolatedApp() {
  const sent = [];
  const cache = new Map();
  const mockEnv = {
    RESEND_API_KEY: 'test-key-never-sent',
    CONTACT_TO_EMAIL: 'admin@example.test',
    CONTACT_FROM_EMAIL: 'no-reply@example.test',
  };
  function load(relative) {
    const filename = path.resolve(root, relative);
    if (cache.has(filename)) return cache.get(filename).exports;
    const loadedModule = { exports: {} };
    cache.set(filename, loadedModule);
    const code = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
    }).outputText;
    const sandbox = {
      module: loadedModule, exports: loadedModule.exports, console, URL, URLSearchParams,
      process: { env: mockEnv },
      require(id) {
        if (id === 'resend') return { Resend: class { emails = { send: async (email) => { sent.push(email); return { data: { id: 'test-message' }, error: null }; } }; } };
        if (id.startsWith('@/')) {
          const target = id.slice(2);
          const extension = ['.ts', '.tsx'].find((ext) => fs.existsSync(path.join(root, target + ext)));
          return load(target + extension);
        }
        return requireDependency(id);
      },
    };
    vm.runInNewContext(code, sandbox, { filename });
    return loadedModule.exports;
  }
  return { load, sent };
}

const required = { name: 'Test Customer', email: 'customer@example.test', message: 'Testing inquiry handling, no delivery expected.' };
async function submit(app, fields) {
  const result = await app.load('app/api/contact/route.ts').POST(new Request('http://localhost/api/contact', {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...required, ...fields }),
  }));
  return { status: result.status, body: await result.json() };
}

for (const [service, label] of [
  ['rental', 'Trailer rental'],
  ['delivery', 'Trailer delivery & collection'],
  ['transport', 'Pickup, transport & delivery'],
]) {
  test(`${service}: selection reaches both email formats and both recipients`, async () => {
    const app = isolatedApp();
    const response = await submit(app, { serviceType: service, pickupLocation: 'Kelowna <west>', destination: 'Vernon & area', returnDate: '2026-10-20' });
    assert.equal(response.status, 200);
    assert.equal(response.body.success, true);
    assert.equal(app.sent.length, 2);
    for (const mail of app.sent) {
      assert.ok(mail.text.includes(`Service: ${label}`));
      assert.ok(mail.html.includes(label.replaceAll('&', '&amp;')));
      assert.equal(mail.text.includes('Kelowna <west>'), service !== 'rental');
      assert.equal(mail.html.includes('Kelowna &lt;west&gt;'), service !== 'rental');
      assert.equal(mail.text.includes('Vernon & area'), service === 'transport');
      assert.equal(mail.text.includes('2026-10-20'), service !== 'transport');
      assert.ok(!mail.html.includes('Kelowna <west>'));
    }
  });
}

test('legacy inquiries remain accepted; unknown service input cannot enter mail HTML', async () => {
  const app = isolatedApp();
  const response = await submit(app, { pickupPreference: 'Customer pickup', serviceType: '<script>evil</script>' });
  assert.equal(response.status, 200);
  for (const email of app.sent) {
    assert.ok(email.text.includes('Pickup / Delivery: Customer pickup'));
    assert.ok(!email.html.includes('<script>'));
    assert.ok(email.text.includes('Not specified / help me choose'));
  }
});

test('required-field validation and honeypot never send email', async () => {
  const app = isolatedApp();
  assert.equal((await submit(app, { name: '' })).status, 400);
  assert.equal((await submit(app, { website: 'bot.example' })).status, 200);
  assert.equal(app.sent.length, 0);
});

test('service and trailer links round-trip special characters safely', () => {
  const { serviceInquiryHref, parseServiceType } = isolatedApp().load('data/servicePathways.ts');
  const url = new URL(serviceInquiryHref('transport', '7×16 enclosed & ramp'), 'http://localhost');
  assert.equal(url.searchParams.get('service'), 'transport');
  assert.equal(url.searchParams.get('trailer'), '7×16 enclosed & ramp');
  assert.equal(url.hash, '#inquiry');
  for (const value of [null, '<script>', {}, 'DELIVERY']) assert.equal(parseServiceType(value), '');
});

test('illustrative gallery stays distinct from completed jobs and remains noindex', () => {
  const app = isolatedApp();
  const { metadata } = app.load('app/recent-jobs/page.tsx');
  assert.equal(metadata.robots.index, false);
  assert.ok(!app.load('app/sitemap.ts').default().some((route) => route.url.endsWith('/recent-jobs')));
  const html = renderToStaticMarkup(React.createElement(app.load('components/sections/RecentJobs.tsx').RecentJobs));
  assert.equal((html.match(/<article/g) || []).length, 2);
  assert.ok(html.includes('Illustrative scenes, not completed customer jobs.'));
  assert.ok(html.includes('enclosed-trailer-delivery-example'));
  assert.ok(html.includes('dump-trailer-landscaping-example'));
  assert.ok(!html.includes('Plan a similar job'));
  assert.equal(app.load('data/recentJobs.ts').getPublishedJobs().length, 0);
  const full = renderToStaticMarkup(React.createElement(app.load('components/sections/RecentJobs.tsx').RecentJobs, { fullPage: true }));
  assert.ok(full.includes('Illustrative scenes, not completed customer jobs.'));
  assert.ok(!metadata.description.includes('real Tow-N-Go trailer projects'));
});

test('gallery replaces illustrative scenes with approved jobs, limits homepage to two, and enables discovery', () => {
  const app = isolatedApp();
  const { recentJobs, getPublishedJobs } = app.load('data/recentJobs.ts');
  for (let i = 0; i < 5; i++) recentJobs.push({
    id: `fixture-${i}`, title: `Test-only project ${i}`, summary: 'Synthetic test fixture, never saved to site data.',
    location: 'Kelowna', trailer: 'Test enclosed trailer', service: 'transport',
    image: { src: '/images/test-fixture.jpg', alt: 'Synthetic test fixture', width: 1200, height: 900 },
    approvedForWebsite: i !== 0,
  });
  assert.equal(getPublishedJobs().length, 4);
  const { RecentJobs } = app.load('components/sections/RecentJobs.tsx');
  const home = renderToStaticMarkup(React.createElement(RecentJobs));
  const all = renderToStaticMarkup(React.createElement(RecentJobs, { fullPage: true }));
  assert.equal((home.match(/<article/g) || []).length, 2);
  assert.equal((all.match(/<article/g) || []).length, 4);
  assert.ok(!all.includes('Test-only project 0'));
  assert.ok(home.includes('/recent-jobs#fixture-1'));
  assert.ok(all.includes('service=transport'));
  assert.ok(all.includes('trailer=Test'));
  assert.ok(!all.includes('enclosed-trailer-delivery-example'));
  assert.ok(!all.includes('dump-trailer-landscaping-example'));
  assert.ok(!all.includes('Illustrative scenes'));
  assert.equal(app.load('app/recent-jobs/page.tsx').metadata.robots.index, true);
  assert.ok(app.load('app/sitemap.ts').default().some((route) => route.url.endsWith('/recent-jobs')));
});

test('gallery exposes approved additional photos on the project page without leaking draft photos', () => {
  const app = isolatedApp();
  const { recentJobs } = app.load('data/recentJobs.ts');
  const job = {
    id: 'gallery-fixture', title: 'Synthetic gallery fixture', summary: 'Never saved to site data.',
    location: 'Kelowna', trailer: 'Test trailer & ramp', service: 'delivery',
    image: { src: '/images/jobs/test-main.webp', alt: 'Main fixture photo', width: 1600, height: 1200 },
    photos: [{ src: '/images/jobs/test-detail.webp', alt: 'Detail fixture photo', width: 1200, height: 1600, caption: 'Fixture detail & context' }],
    approvedForWebsite: true,
  };
  recentJobs.push(job, { ...job, id: 'unapproved-fixture', approvedForWebsite: false,
    image: { ...job.image, src: '/images/jobs/unapproved-main.webp' },
    photos: [{ ...job.photos[0], src: '/images/jobs/unapproved-detail.webp' }],
  });
  const { RecentJobs } = app.load('components/sections/RecentJobs.tsx');
  const home = renderToStaticMarkup(React.createElement(RecentJobs));
  const all = renderToStaticMarkup(React.createElement(RecentJobs, { fullPage: true }));
  assert.ok(!home.includes('test-detail.webp'));
  assert.ok(all.includes('<details'));
  assert.ok(all.includes('href="/images/jobs/test-detail.webp"'));
  assert.ok(all.includes('Fixture detail &amp; context'));
  assert.ok(all.includes('service=delivery'));
  assert.ok(!all.includes('unapproved-main'));
  assert.ok(!all.includes('unapproved-detail'));
  const { metadata } = app.load('app/recent-jobs/page.tsx');
  assert.equal(metadata.openGraph.images[0].url, 'https://www.towandgotrailers.ca/images/jobs/test-main.webp');
  assert.equal(metadata.twitter.images[0].url, metadata.openGraph.images[0].url);
  assert.equal(metadata.twitter.images[0].alt, job.image.alt);
});
