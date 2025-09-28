import * as Sentry from "@sentry/react";

export const initialize = () => {
  if (import.meta.env.DEV) {
    return;
  }

  const sampleRate =
    "SAMPLE_RATE" in import.meta.env
      ? Number(import.meta.env.SAMPLE_RATE)
      : 0.1;

  Sentry.init({
    environment: import.meta.env.MODE,
    dsn: "https://a9efe74598ad4f0b86604e9694d254ed@o237935.ingest.us.sentry.io/4505446442663936",
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.consoleLoggingIntegration({ levels: ["log", "warn", "error"] }),
      Sentry.replayIntegration(),
    ],
    // Logging
    enableLogs: true,
    // Performance Monitoring
    tracePropagationTargets: ["localhost"],
    tracesSampleRate: sampleRate,
    // Session Replay
    replaysSessionSampleRate: sampleRate,
    replaysOnErrorSampleRate: sampleRate,
  });
};
