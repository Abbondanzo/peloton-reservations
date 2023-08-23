import * as Sentry from "@sentry/react";

export const initialize = () => {
  if (process.env.NODE_ENV === "development") {
    return;
  }

  const sampleRate =
    "SAMPLE_RATE" in process.env ? Number(process.env.SAMPLE_RATE) : 0.1;

  Sentry.init({
    environment: process.env.NODE_ENV,
    dsn: "https://a9efe74598ad4f0b86604e9694d254ed@o237935.ingest.sentry.io/4505446442663936",
    integrations: [
      new Sentry.BrowserTracing({
        // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
        tracePropagationTargets: ["localhost"],
      }),
      new Sentry.Replay(),
    ],
    // Performance Monitoring
    tracesSampleRate: sampleRate,
    // Session Replay
    replaysSessionSampleRate: sampleRate,
    replaysOnErrorSampleRate: sampleRate,
  });
};
