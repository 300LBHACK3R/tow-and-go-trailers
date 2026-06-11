"use client";

import { useEffect } from "react";
import { trackPageView } from "@/lib/analytics";

type PageViewTrackerProps = {
  path: string;
  title?: string;
};

export function PageViewTracker({ path, title }: PageViewTrackerProps) {
  useEffect(() => {
    trackPageView(path, title);
  }, [path, title]);

  return null;
}
