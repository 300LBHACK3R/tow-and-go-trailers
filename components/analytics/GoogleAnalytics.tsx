import Script from "next/script";

type GoogleAnalyticsProps = {
  measurementId?: string;
};

export function GoogleAnalytics({
  measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
}: GoogleAnalyticsProps) {
  const normalizedMeasurementId = measurementId?.trim();

  if (!normalizedMeasurementId) {
    return null;
  }

  const encodedMeasurementId = encodeURIComponent(normalizedMeasurementId);
  const serializedMeasurementId = JSON.stringify(normalizedMeasurementId);

  return (
    <>
      <Script
        id="google-analytics-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${encodedMeasurementId}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];

          function gtag() {
            window.dataLayer.push(arguments);
          }

          window.gtag = gtag;

          gtag("js", new Date());
          gtag("config", ${serializedMeasurementId});
        `}
      </Script>
    </>
  );
}