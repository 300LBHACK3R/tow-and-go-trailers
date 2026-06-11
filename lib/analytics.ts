"use client";

export type AnalyticsEventProperties = Record<
  string,
  string | number | boolean | null | undefined
>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (
      command: "event" | "config" | "js",
      eventNameOrId: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export function trackEvent(
  eventName: string,
  properties: AnalyticsEventProperties = {}
) {
  if (typeof window === "undefined") return;

  const cleanProperties = Object.fromEntries(
    Object.entries(properties).filter(([, value]) => value !== undefined)
  );

  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: eventName,
    ...cleanProperties,
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, cleanProperties);
  }

  window.dispatchEvent(
    new CustomEvent("towngo:analytics", {
      detail: {
        eventName,
        properties: cleanProperties,
      },
    })
  );
}

export function trackPageView(path: string, title?: string) {
  trackEvent("page_view", {
    page_path: path,
    page_title: title,
  });
}

export function trackRentalCategoryClick(categoryId: string, categoryTitle: string) {
  trackEvent("rental_category_click", {
    category_id: categoryId,
    category_title: categoryTitle,
  });
}

export function trackTrailerInquiryClick(trailerId: string, trailerName: string) {
  trackEvent("request_this_trailer_click", {
    trailer_id: trailerId,
    trailer_name: trailerName,
  });
}

export function trackContactFormSubmission(source: string) {
  trackEvent("contact_form_submit_success", {
    source,
  });
}

export function trackContactOptionClick(option: "phone" | "facebook" | "email") {
  trackEvent("contact_option_click", {
    option,
  });
}
