# On the Job

The **On the Job** gallery at `/recent-jobs` and on the homepage uses the same spacious, photo-led cards: two landscape images per row on desktop, one per row on mobile, service labels and short captions. The homepage links to the gallery; gallery images open at full size in a new tab. Full project details and extra photographs expand on the gallery page. The existing route, section IDs and project anchor links remain unchanged.

## Current state

Tate supplied and requested publication of four trailer-use photos on October 4, 2026: renovation debris in a dump trailer, furniture moving with an enclosed trailer, construction equipment on a flatdeck, and landscaping cleanup with a dump trailer.

They are stored as `GalleryPhoto` records in `data/projectGallery.ts`, with `kind: "photo"` in the combined gallery. These records have permission to display but do not assert a completed customer job, customer identity, date or job location. The `service` field is enquiry context, not a historical service record. Captions describe visible trailer uses and Tow-N-Go’s known service area. The equipment caption describes the parked setup before load securement.

The original JPEG pixels are preserved under descriptive lowercase filenames in `public/images/jobs/`; Next Image supplies responsive image optimization. Captions are always visible below these images, the full compositions are retained with `object-contain`, and category links lead to relevant rental pages. The homepage shows the first two entries; the gallery shows all four.

There are still no verified customer jobs in `data/recentJobs.ts`. Approved actual jobs will appear first, followed by approved supplied photos. The heading remains **On the Job**, with **Trailers in use** describing the present collection. Once any gallery entries are available, the page is indexable, appears in the sitemap, and uses the first entry’s photograph for social sharing.

The older two generated illustrative scenes remain marketing artwork references only in `galleryExamples`. They do not automatically populate this gallery and must never be represented as evidence of completed work. General hero artwork also remains illustrative.

## Adding actual jobs later

1. Ask Chad for the original project photographs, general town or area, trailer used, service actually supplied, a short factual description, and confirmation that the photos and details may appear on the website. Keep private permission records outside this repository.
2. Create `public/images/jobs/` if needed. Add optimized real JPG, PNG or WebP photos, remove GPS metadata, and use descriptive lowercase filenames. Do not publish customer addresses or other identifying details without permission.
3. Add an entry to `recentJobs` in `data/recentJobs.ts`, newest first. Use its actual image dimensions and a unique URL-safe `id`. Use an exact trailer name from `data/trailers.ts` for inquiry preselection. Choose the actual service: `rental`, `delivery` or `transport`.
4. Set `approvedForWebsite: true` only once that entry's photographs and details are ready to publish. Unapproved entries are never displayed. Do not commit sensitive drafts or private customer information.
5. Run `npm run build` and `node --test --test-name-pattern=gallery scripts/check-service-pathways.mjs`. Preview `/` and `/recent-jobs` on desktop and mobile using `npm run dev`. Check photos, inquiry links and expanded details.

**Approved actual jobs appear before supplied trailer-use photos.** The homepage displays the first two combined entries; the gallery page displays all approved entries. Project-specific facts and expanded additional photographs are reserved for confirmed actual jobs. If both sources are empty, the coming-soon state returns and the page becomes noindex and is omitted from the sitemap.

No CMS, paid service or file-upload endpoint is added. Publishing new entries still means editing the data file and deploying the website.

## Job entry template

This is an authoring template, not a customer project. Replace all placeholders and photo dimensions. Insert the object inside the existing `recentJobs` array without overwriting other entries.

```ts
{
  id: "replace-with-unique-project-slug",
  title: "Replace with the actual project title",
  summary: "A short, factual description of what was completed.",
  location: "Town or general area only",
  trailer: "Copy the exact trailer name from data/trailers.ts",
  service: "rental", // rental, delivery or transport
  image: {
    src: "/images/jobs/replace-with-real-photo.webp",
    alt: "Describe what is actually shown in the photograph",
    width: 1600, // replace with actual dimensions
    height: 1200,
  },
  photos: [
    {
      src: "/images/jobs/replace-with-second-photo.webp",
      alt: "Describe the second photograph",
      width: 1600, // replace with actual dimensions
      height: 1200,
      caption: "Optional short factual caption",
    },
  ], // omit photos when there is only one photograph
  approvedForWebsite: false,
},
```

## Starter artwork

The two 1536 × 1024 WebP images in `public/images/gallery/` were generated from the existing fleet references for this preview and optimized without changing their composition. They are intentionally stored apart from real job photos. Keep the illustration disclosure whenever these images are used as gallery examples.
