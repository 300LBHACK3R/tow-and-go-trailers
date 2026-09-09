import type { ServiceType } from "@/data/servicePathways";

export type RecentJob = {
  id: string;
  title: string;
  summary: string;
  /** General community only, never a customer's street address. */
  location: string;
  trailer: string;
  service: ServiceType;
  image: { src: string; alt: string; width: number; height: number };
  /** Set true only after the actual job details and permission to publish are confirmed. */
  approvedForWebsite: boolean;
};

// Add real, approved jobs here. Advertising artwork is not evidence of a job.
// See docs/RECENT_JOBS.md for the authoring instructions.
export const recentJobs: readonly RecentJob[] = [];

export function getPublishedJobs(): readonly RecentJob[] {
  return recentJobs.filter((job) => job.approvedForWebsite);
}
