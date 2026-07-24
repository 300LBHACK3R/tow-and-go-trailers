"use client";

type AnalyticsValue = string | number | boolean | null;

export type AnalyticsEventProperties = Record<
  string,
  AnalyticsValue | undefined
>;

type CleanAnalyticsEventProperties = Record<
  string,
  AnalyticsValue
>;

type GtagFunction = {
  (
    command: "event",
    eventName: string,
    params?: Record<string, unknown>
  ): void;

  (
    command: "config",
    measurementId: string,
    params?: Record<string, unknown>
  ): void;

  (command: "js", date: Date): void;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFunction;
  }
}

function cleanEventProperties(
  properties: AnalyticsEventProperties
): CleanAnalyticsEventProperties {
  const cleanedProperties: CleanAnalyticsEventProperties = {};

  for (const [key, value] of Object.entries(properties)) {
    if (value !== undefined) {
      cleanedProperties[key] = value;
    }
  }

  return cleanedProperties;
}

export function trackEvent(
  eventName: string,
  properties: AnalyticsEventProperties = {}
): void {
  if (typeof window === "undefined") {
    return;
  }

  const normalizedEventName = eventName.trim();

  if (!normalizedEventName) {
    return;
  }

  const cleanProperties = cleanEventProperties(properties);

  /*
   * Use one analytics delivery path only.
   *
   * gtag internally pushes events into dataLayer. Manually pushing the same
   * event before calling gtag would cause duplicate analytics events.
   */
  if (typeof window.gtag === "function") {
    window.gtag(
      "event",
      normalizedEventName,
      cleanProperties
    );
  } else {
    window.dataLayer = window.dataLayer ?? [];

    window.dataLayer.push({
      event: normalizedEventName,
      ...cleanProperties,
    });
  }

  /*
   * Internal browser event for optional debugging and future integrations.
   * This does not create another Google Analytics event.
   */
  window.dispatchEvent(
    new CustomEvent("towngo:analytics", {
      detail: {
        eventName: normalizedEventName,
        properties: cleanProperties,
      },
    })
  );
}

export function trackPageView(
  path: string,
  title?: string
): void {
  trackEvent("page_view", {
    page_path: path,
    page_title: title,
    page_location:
      typeof window !== "undefined"
        ? window.location.href
        : undefined,
  });
}

export function trackRentalCategoryClick(
  categoryId: string,
  categoryTitle: string
): void {
  trackEvent("rental_category_click", {
    category_id: categoryId,
    category_title: categoryTitle,
  });
}

export function trackTrailerInquiryClick(
  trailerId: string,
  trailerName: string
): void {
  trackEvent("request_this_trailer_click", {
    trailer_id: trailerId,
    trailer_name: trailerName,
  });
}

export function trackContactFormSubmission(
  source: string
): void {
  trackEvent("contact_form_submit_success", {
    source,
  });
}

export function trackContactOptionClick(
  option: "phone" | "facebook" | "email"
): void {
  trackEvent("contact_option_click", {
    option,
  });
}