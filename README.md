# Tow-N-Go Trailers

The Tow-N-Go website for trailer rentals, empty-trailer delivery and collection, and loaded transport in Kelowna and the Okanagan. Built with Next.js 16, React 19, TypeScript and Tailwind CSS 4.

## Local setup

Use Node.js 20.9 or newer and npm. Run these commands from this project folder:

```powershell
npm ci
npm run dev
```

To enable email in a new checkout, copy `.env.example` to `.env.local` and fill in your existing production values. Do not overwrite an existing `.env.local`.

Open http://localhost:3000. Add the email settings below to `.env.local` to enable the contact form. Website pages can be previewed without email credentials; sending an inquiry requires all three values.

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key for sending inquiry emails. |
| `CONTACT_TO_EMAIL` | Business inbox that receives customer inquiries. |
| `CONTACT_FROM_EMAIL` | Sender address configured for the Resend account. |

The contact endpoint sends the business an inquiry email and attempts a confirmation email to the customer. Keep real values in `.env.local` or the deployment environment. `.env.example` contains blank placeholders and is safe to share.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Create the production build. |
| `npm start` | Serve an existing production build. |
| `npm run lint` | Check source with ESLint. |
| `npm run typecheck` | Check TypeScript without emitting files. |
| `npm run test:service-pathways` | Check inquiry handling and gallery behavior using an isolated email transport. No real emails are sent. |

## Folder guide

| Path | Contents |
| --- | --- |
| `app/` | Pages, shared layout, global styles, metadata routes and the contact API. |
| `components/` | Layout, reusable controls, homepage sections, rental cards, inquiry form and seasonal decoration. |
| `data/` | Fleet, rental categories, service options, FAQ content and project gallery entries. |
| `lib/` | Business details, analytics helpers and seasonal campaign dates. |
| `public/` | Website artwork, fleet photographs, icons and manifest. |
| `utils/` | Shared class-name utility. |
| `docs/` | Authoring instructions, including the project gallery guide. |
| `scripts/` | Service-pathway and gallery verification. |

## Editing content

- **Business details and navigation:** edit `lib/site.ts` for contact information, service area, social links and shared metadata.
- **Trailers and rental categories:** edit `data/trailers.ts`, `data/trailerCategories.ts` and `data/trailerCategorySeoContent.ts`. Keep existing fleet image paths intact unless replacing a photograph intentionally.
- **Service options:** edit `data/servicePathways.ts`. Preserve the `rental`, `delivery` and `transport` IDs because inquiry links and email handling use them.
- **Frequently asked questions:** edit `data/faqDirectory.ts`. The FAQ page is at `/faq`.
- **Reviews:** the review presentation lives in `components/sections/ReviewsSection.tsx` and `app/reviews/page.tsx`. Use approved, accurate customer feedback.
- **On the Job gallery:** follow [docs/RECENT_JOBS.md](docs/RECENT_JOBS.md) before adding entries to `data/recentJobs.ts`. Starter artwork in `data/projectGallery.ts` is labeled as illustrative and is automatically replaced once approved real jobs exist.
- **Seasonal decoration:** campaign dates are in `lib/seasonal.ts`; presentation is in `components/seasonal/`. The current Halloween campaign has an explicit end date.

Run the relevant checks after editing, then preview affected pages at desktop and mobile sizes. The shared header, footer, buttons and inquiry form serve multiple routes.

## Production and handoff

Install dependencies with `npm ci`, configure the three email environment variables, and run `npm run build`. Use `npm start` on a Next.js-compatible Node host or connect the project to a supported deployment service. Vercel Analytics and Speed Insights are included in the shared layout.

Keep one project folder containing source, configuration, `package-lock.json`, documentation and all `public/` assets. Dependency folders, build output, local recovery backups and real environment files are excluded from version control. Install dependencies and regenerate build output on the receiving machine.

For coding changes, read `AGENTS.md` and the installed Next.js documentation it references.

## October 4 review

This review adds coordinated Halloween edge artwork and lantern glow, shared interior page headers, the renamed On the Job gallery, cleaner navigation and enquiry styling, and removal of 12 confirmed unused backup/source files. Existing contact handling, trailer data, pricing, approved-job controls and analytics are retained.

Build, TypeScript, lint and the nine existing service/gallery regression checks passed. A local-browser preview was unavailable in the build environment; review the homepage, On the Job, rental details, mobile menu and contact page at phone and desktop widths before publishing. This package has not been pushed or deployed.

This folder is a complete source snapshot, without Git history, environment secrets, dependencies or build caches. Keep your existing Git checkout and private environment files. To publish after review, apply the reviewed source changes to that checkout and run the normal build and Git workflow.
