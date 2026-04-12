import "dotenv/config";
import * as Sentry from "@sentry/node";
import { Alerter } from "./alerter";
import { logger } from "./logger";
import { Manager } from "./manager";

Sentry.init({
  dsn: process.env.SENTRY_DSN, // no-op if undefined
  environment: process.env.NODE_ENV ?? "development",
  tracesSampleRate: 1.0,
  beforeSend(event) {
    // Strip user IDs from breadcrumb messages to avoid sending PII
    event.breadcrumbs?.forEach((b) => {
      if (b.message) {
        b.message = b.message.replace(/user \S+/gi, "user [redacted]");
      }
    });
    return event;
  },
});

const run = async () => {
  // Start
  const alerter = new Alerter();
  await alerter.initialize();
  logger.log("Alerter initialized");

  const manager = new Manager(alerter);
  await manager.initialize();
  logger.log("Manager initialized");

  // Loop
  await manager.loop();

  // End
  process.on("SIGINT", () => {
    logger.log("Terminating control loop");
    manager.cancel();
    process.exit(0);
  });
};

run()
  .then(() => {
    logger.log("Process finished");
  })
  .catch((error) => {
    logger.error(error);
    process.exit(1);
  });
