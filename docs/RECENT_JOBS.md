# On the Job

The **On the Job** gallery at `/recent-jobs` and on the homepage uses the same spacious, photo-led cards: two landscape images per row on desktop, one per row on mobile, service labels and short captions. The homepage links to the gallery; gallery images open at full size in a new tab. Full project details and extra photographs expand on the gallery page. The existing route, section IDs and project anchor links remain unchanged.

## Current state

There are no approved customer jobs in `data/recentJobs.ts` yet. On the Job now displays a concise photo-coming-soon state on the homepage and gallery page. It only displays actual approved customer projects, showing the trailers being put to use. It does not fall back to generated advertising scenes.

The two generated illustrative scenes remain preserved in `data/projectGallery.ts` as marketing artwork references:

- Enclosed-trailer delivery at a residential driveway.
- Dump-trailer rental for a landscaping project.

These are service ideas, not evidence of work performed, and are not published in On the Job. Never copy them into the approved customer-job array or represent them as real project photographs. The page's general hero artwork also remains illustrative, with an explicit image description; it is not a customer job entry.

The gallery page remains noindex and absent from the sitemap until at least one actual, approved job is added. The website's published version is not changed by preparing this local update.

## Adding actual jobs later

1. Ask Chad for the original project photographs, general town or area, trailer used, service actually supplied, a short factual description, and confirmation that the photos and details may appear on the website. Keep private permission records outside this repository.
2. Create `public/images/jobs/` if needed. Add optimized real JPG, PNG or WebP photos, remove GPS metadata, and use descriptive lowercase filenames. Do not publish customer addresses or other identifying details without permission.
3. Add an entry to `recentJobs` in `data/recentJobs.ts`, newest first. Use its actual image dimensions and a unique URL-safe `id`. Use an exact trailer name from `data/trailers.ts` for inquiry preselection. Choose the actual service: `rental`, `delivery` or `transport`.
4. Set `approvedForWebsite: true` only once that entry's photographs and details are ready to publish. Unapproved entries are never displayed. Do not commit sensitive drafts or private customer information.
5. Run `npm run build` and `node --test --test-name-pattern=gallery scripts/check-service-pathways.mjs`. Preview `/` and `/recent-jobs` on desktop and mobile using `npm run dev`. Check photos, inquiry links and expanded details.

**Once the first approved actual job exists, it automatically replaces the coming-soon state.** The homepage displays the first two approved jobs; the gallery page displays all approved jobs. Its search indexing and sitemap entry are enabled on the next build. Its social preview uses the first real job photo.

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
