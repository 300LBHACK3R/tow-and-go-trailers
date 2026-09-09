# Publishing recent jobs

The gallery is powered by `data/recentJobs.ts`. It is deliberately empty until actual jobs and permission to publish their photos/details are confirmed. Do not use generated advertising images as evidence of customer jobs.

1. Get Chad’s confirmation of the job, general town/area, trailer used, service provided, and permission to publish the photo and description. Check that recognizable people and private property details can be shown. Keep permission records privately, outside this public repository.
2. Put an optimized real photo in `public/images/jobs/`. Use a descriptive lowercase filename and actual image dimensions. Avoid publishing street addresses, customer names, licence plates or other identifying information without permission.
3. Add an entry to `recentJobs`, newest first. Fields: unique URL-safe `id`, `title`, short factual `summary`, general `location`, `trailer`, `service` (`rental`, `delivery`, `transport`), `image` (`src`, descriptive `alt`, actual `width` and `height`), and `approvedForWebsite`.
4. Set `approvedForWebsite: true` only when the content is ready and approved. False entries never appear in the gallery. Avoid committing sensitive drafts to a public repository.
5. Run `npm run typecheck`, `npm run lint`, and `npm run build`; review desktop and mobile before deployment.

The homepage shows the first three published entries. `/recent-jobs` shows all. Every card opens the inquiry form with its service and trailer selected. Until approved entries exist, a Facebook update link is shown; the gallery page is noindex and excluded from the sitemap. Adding the first approved entry makes the page indexable and adds it to the sitemap on the next build/deployment.

No new CMS or paid service is required. Adding jobs currently requires editing this data file and deploying the site.
