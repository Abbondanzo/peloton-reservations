import type { Alert, RawClass } from "shared";
import { buildAlert, buildInstructor, buildRawClass } from "shared/testing";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Alerter } from "./alerter";

const STUDIO_ID = "7248695";
const USER_ID = "user-1";

/**
 * A single fake Firebase ref shared by every path, recording what was written.
 * `once` returns whatever `snapshotValue` currently holds so tests can stand in
 * for stored class history.
 */
const refCalls: string[] = [];
let snapshotValue: unknown = null;
/** Per-path overrides for `once`, for paths other than the class history. */
let storedValues: Record<string, unknown> = {};
const set = vi.fn();
const remove = vi.fn();
const update = vi.fn();
const sendEachForMulticast = vi.fn();

const makeRef = (path: string) => {
  const node = {
    set,
    remove,
    update,
    orderByKey: () => node,
    limitToFirst: () => node,
    once: async () => ({
      val: () => (path in storedValues ? storedValues[path] : snapshotValue),
    }),
  };
  return node;
};

vi.mock("firebase-admin", () => ({
  default: {
    initializeApp: vi.fn(),
    credential: { cert: vi.fn() },
    database: Object.assign(
      () => ({
        ref: (path?: string) => {
          refCalls.push(path ?? "");
          return makeRef(path ?? "");
        },
      }),
      { ServerValue: { increment: (n: number) => n } }
    ),
    messaging: () => ({ sendEachForMulticast }),
  },
}));

vi.mock("./metrics", () => ({
  Metrics: { recordDiff: vi.fn(), recordFcm: vi.fn() },
}));

vi.mock("./logger", () => ({
  logger: { log: vi.fn(), error: vi.fn() },
}));

vi.mock("@sentry/node", () => ({ captureException: vi.fn() }));

/**
 * The pieces of Alerter under test — alert grouping, debouncing and delivery —
 * are private, and its public surface is only the two DiffDelegate hooks plus
 * the Firebase listeners wired up in initialize(). Tests stand in for those
 * listeners by calling the handlers directly.
 */
interface AlerterInternals {
  handleAlerts(schema: {
    [userId: string]: { [alertId: string]: Alert };
  }): void;
  handleAlertPreferences(schema: unknown): void;
  handleMessagingTokens(schema: unknown): void;
  processPendingNotifications(): Promise<void>;
  pendingNotifications: Map<
    string,
    { userId: string; changeType: string; sendAt: number }
  >;
}

const internals = (alerter: Alerter) => alerter as unknown as AlerterInternals;

const FREE = { occupancy: 10, max_occupancy: 60, waiting_count: 0 };
const WAITLISTED = { occupancy: 60, max_occupancy: 60, waiting_count: 2 };
const FULL = { occupancy: 60, max_occupancy: 60, waiting_count: 10 };

let alerter: Alerter;
const originalNodeEnv = process.env.NODE_ENV;

const withAlerts = (...alerts: Alert[]) => {
  internals(alerter).handleAlerts({
    [USER_ID]: Object.fromEntries(alerts.map((a) => [a.id, a])),
  });
};

const pending = () => [...internals(alerter).pendingNotifications.values()];

beforeEach(() => {
  refCalls.length = 0;
  snapshotValue = null;
  storedValues = {};
  set.mockResolvedValue(undefined);
  remove.mockResolvedValue(undefined);
  update.mockResolvedValue(undefined);
  sendEachForMulticast.mockResolvedValue({
    successCount: 1,
    failureCount: 0,
    responses: [{ success: true }],
  });
  vi.useFakeTimers();
  vi.setSystemTime(new Date("2026-04-29T13:00:00.000Z"));
  process.env.NODE_ENV = "production";
  alerter = new Alerter();
  internals(alerter).handleMessagingTokens({ [USER_ID]: { "token-a": true } });
});

afterEach(() => {
  vi.useRealTimers();
  process.env.NODE_ENV = originalNodeEnv;
});

describe("handleAlerts", () => {
  it("routes an addition to a user whose alert matches", () => {
    withAlerts(buildAlert());

    alerter.handleAddition(STUDIO_ID, [buildRawClass(FREE)]);

    expect(pending()).toMatchObject([{ userId: USER_ID, changeType: "added" }]);
  });

  it("ignores an alert that is disabled", () => {
    withAlerts(buildAlert({ disabled: true }));

    alerter.handleAddition(STUDIO_ID, [buildRawClass(FREE)]);

    expect(pending()).toEqual([]);
  });

  it("ignores classes for a studio no alert targets", () => {
    withAlerts(buildAlert({ studioId: "7248663" }));

    alerter.handleAddition(STUDIO_ID, [buildRawClass(FREE)]);

    expect(pending()).toEqual([]);
  });

  it("replaces a user's alerts when the listener re-fires", () => {
    withAlerts(buildAlert({ id: "a", instructors: ["1"] }));
    // The user deleted their alert; the next snapshot only has an unrelated one.
    withAlerts(buildAlert({ id: "b", instructors: ["99"] }));

    alerter.handleAddition(STUDIO_ID, [buildRawClass(FREE)]);

    expect(pending()).toEqual([]);
  });

  it("tolerates an empty alerts snapshot", () => {
    expect(() => internals(alerter).handleAlerts(null as never)).not.toThrow();
  });
});

describe("handleMessagingTokens", () => {
  it("clears every token when the snapshot is empty", async () => {
    withAlerts(buildAlert());
    internals(alerter).handleMessagingTokens(null);

    alerter.handleAddition(STUDIO_ID, [buildRawClass(FREE)]);
    await internals(alerter).processPendingNotifications();

    expect(sendEachForMulticast).not.toHaveBeenCalled();
  });

  it("sends to every registered device for the user", async () => {
    internals(alerter).handleMessagingTokens({
      [USER_ID]: { "token-a": true, "token-b": true },
    });
    withAlerts(buildAlert());

    alerter.handleAddition(STUDIO_ID, [buildRawClass(FREE)]);
    await internals(alerter).processPendingNotifications();

    expect(sendEachForMulticast.mock.calls[0][0].tokens).toEqual([
      "token-a",
      "token-b",
    ]);
  });
});

describe("handleChange", () => {
  it("queues became_free when a free alert's class opens up", () => {
    withAlerts(buildAlert({ maxStatus: "free" }));

    alerter.handleChange(STUDIO_ID, [
      { old: buildRawClass(WAITLISTED), new: buildRawClass(FREE) },
    ]);

    expect(pending()).toMatchObject([{ changeType: "became_free" }]);
  });

  it("queues waitlist_opened when a full waitlist reopens", () => {
    withAlerts(buildAlert({ maxStatus: "waitlist" }));

    alerter.handleChange(STUDIO_ID, [
      { old: buildRawClass(FULL), new: buildRawClass(WAITLISTED) },
    ]);

    expect(pending()).toMatchObject([{ changeType: "waitlist_opened" }]);
  });

  it("queues waitlist_changed independently of the status transition", () => {
    withAlerts(buildAlert({ maxStatus: "full", waitlistAlerts: true }));

    alerter.handleChange(STUDIO_ID, [
      {
        old: buildRawClass({ ...WAITLISTED, waiting_count: 2 }),
        new: buildRawClass({ ...WAITLISTED, waiting_count: 3 }),
      },
    ]);

    expect(pending()).toMatchObject([{ changeType: "waitlist_changed" }]);
  });

  it("queues nothing when occupancy moves but the status does not", () => {
    withAlerts(buildAlert({ maxStatus: "free" }));

    alerter.handleChange(STUDIO_ID, [
      {
        old: buildRawClass(FREE),
        new: buildRawClass({ ...FREE, occupancy: 11 }),
      },
    ]);

    expect(pending()).toEqual([]);
  });

  it("writes a history snapshot when the status changes", () => {
    alerter.handleChange(STUDIO_ID, [
      { old: buildRawClass(FREE), new: buildRawClass(WAITLISTED) },
    ]);

    expect(refCalls).toContain(`classHistory/7248695/100/${Date.now()}`);
  });

  it("does not write a history snapshot when the status is unchanged", () => {
    alerter.handleChange(STUDIO_ID, [
      {
        old: buildRawClass(FREE),
        new: buildRawClass({ ...FREE, occupancy: 11 }),
      },
    ]);

    expect(refCalls.filter((p) => p.startsWith("classHistory"))).toEqual([]);
  });
});

describe("handleAddition", () => {
  it("writes a history snapshot for every new class, alert or not", () => {
    alerter.handleAddition(STUDIO_ID, [buildRawClass({ id: 1 })]);

    expect(refCalls).toContain(`classHistory/7248695/1/${Date.now()}`);
  });
});

describe("notification debouncing", () => {
  it("collapses a repeated event into the single pending entry", () => {
    withAlerts(buildAlert());

    alerter.handleAddition(STUDIO_ID, [buildRawClass(FREE)]);
    alerter.handleAddition(STUDIO_ID, [buildRawClass(FREE)]);

    expect(pending()).toHaveLength(1);
  });

  it("keeps distinct classes as separate notifications", () => {
    withAlerts(buildAlert());

    alerter.handleAddition(STUDIO_ID, [
      buildRawClass({ ...FREE, id: 1 }),
      buildRawClass({ ...FREE, id: 2 }),
    ]);

    expect(pending()).toHaveLength(2);
  });

  it("keys waitlist_changed by count so each new count notifies", () => {
    withAlerts(buildAlert({ maxStatus: "full", waitlistAlerts: true }));

    alerter.handleChange(STUDIO_ID, [
      {
        old: buildRawClass({ ...WAITLISTED, waiting_count: 2 }),
        new: buildRawClass({ ...WAITLISTED, waiting_count: 3 }),
      },
    ]);
    alerter.handleChange(STUDIO_ID, [
      {
        old: buildRawClass({ ...WAITLISTED, waiting_count: 3 }),
        new: buildRawClass({ ...WAITLISTED, waiting_count: 4 }),
      },
    ]);

    expect(pending()).toHaveLength(2);
  });

  it("suppresses a repeat of the same event inside the user's delay window", async () => {
    internals(alerter).handleAlertPreferences({
      [USER_ID]: { lastUpdated: 0, notificationDelayMin: 10 },
    });
    withAlerts(buildAlert());

    alerter.handleAddition(STUDIO_ID, [buildRawClass(FREE)]);
    await internals(alerter).processPendingNotifications();
    expect(sendEachForMulticast).toHaveBeenCalledOnce();

    vi.advanceTimersByTime(60_000);
    alerter.handleAddition(STUDIO_ID, [buildRawClass(FREE)]);

    expect(pending()).toEqual([]);
  });

  it("allows the same event again once the delay window has passed", async () => {
    internals(alerter).handleAlertPreferences({
      [USER_ID]: { lastUpdated: 0, notificationDelayMin: 10 },
    });
    withAlerts(buildAlert());

    alerter.handleAddition(STUDIO_ID, [buildRawClass(FREE)]);
    await internals(alerter).processPendingNotifications();

    vi.advanceTimersByTime(11 * 60_000);
    alerter.handleAddition(STUDIO_ID, [buildRawClass(FREE)]);

    expect(pending()).toHaveLength(1);
  });
});

describe("notification pacing", () => {
  it("sends immediately when the user has no configured delay", () => {
    withAlerts(buildAlert());

    alerter.handleAddition(STUDIO_ID, [buildRawClass(FREE)]);

    expect(pending()[0].sendAt).toBe(Date.now());
  });

  it("holds a second notification until the user's cooldown expires", async () => {
    internals(alerter).handleAlertPreferences({
      [USER_ID]: { lastUpdated: 0, notificationDelayMin: 5 },
    });
    withAlerts(buildAlert());

    alerter.handleAddition(STUDIO_ID, [buildRawClass({ ...FREE, id: 1 })]);
    const sentAt = Date.now();
    await internals(alerter).processPendingNotifications();

    alerter.handleAddition(STUDIO_ID, [buildRawClass({ ...FREE, id: 2 })]);

    expect(pending()[0].sendAt).toBe(sentAt + 5 * 60_000);
  });

  it("leaves a not-yet-due notification queued", async () => {
    internals(alerter).handleAlertPreferences({
      [USER_ID]: { lastUpdated: 0, notificationDelayMin: 5 },
    });
    withAlerts(buildAlert());

    alerter.handleAddition(STUDIO_ID, [buildRawClass({ ...FREE, id: 1 })]);
    await internals(alerter).processPendingNotifications();
    alerter.handleAddition(STUDIO_ID, [buildRawClass({ ...FREE, id: 2 })]);

    await internals(alerter).processPendingNotifications();

    expect(sendEachForMulticast).toHaveBeenCalledOnce();
    expect(pending()).toHaveLength(1);
  });

  it("flushes a queued notification once its send time arrives", async () => {
    internals(alerter).handleAlertPreferences({
      [USER_ID]: { lastUpdated: 0, notificationDelayMin: 5 },
    });
    withAlerts(buildAlert());

    alerter.handleAddition(STUDIO_ID, [buildRawClass({ ...FREE, id: 1 })]);
    await internals(alerter).processPendingNotifications();
    alerter.handleAddition(STUDIO_ID, [buildRawClass({ ...FREE, id: 2 })]);

    vi.advanceTimersByTime(5 * 60_000);
    await internals(alerter).processPendingNotifications();

    expect(sendEachForMulticast).toHaveBeenCalledTimes(2);
    expect(pending()).toEqual([]);
  });

  it("keeps the queue drained even when delivery throws", async () => {
    sendEachForMulticast.mockRejectedValue(new Error("FCM down"));
    withAlerts(buildAlert());

    alerter.handleAddition(STUDIO_ID, [buildRawClass(FREE)]);
    await internals(alerter).processPendingNotifications();

    expect(pending()).toEqual([]);
  });
});

describe("pauseAll", () => {
  it("suppresses notifications while the user has everything paused", () => {
    internals(alerter).handleAlertPreferences({
      [USER_ID]: { lastUpdated: 0, notificationDelayMin: 0, pauseAll: true },
    });
    withAlerts(buildAlert());

    alerter.handleAddition(STUDIO_ID, [buildRawClass(FREE)]);

    expect(pending()).toEqual([]);
  });

  it("resumes notifications once the pause is lifted", () => {
    internals(alerter).handleAlertPreferences({
      [USER_ID]: { lastUpdated: 0, notificationDelayMin: 0, pauseAll: false },
    });
    withAlerts(buildAlert());

    alerter.handleAddition(STUDIO_ID, [buildRawClass(FREE)]);

    expect(pending()).toHaveLength(1);
  });
});

describe("FCM delivery", () => {
  const sendAndCaptureMessage = async (
    change: (c: Partial<RawClass>) => void = () => {}
  ) => {
    const overrides: Partial<RawClass> = { ...FREE };
    change(overrides);
    withAlerts(buildAlert());
    alerter.handleAddition(STUDIO_ID, [buildRawClass(overrides)]);
    await internals(alerter).processPendingNotifications();
    return sendEachForMulticast.mock.calls[0][0];
  };

  it("titles a newly listed class as a new class", async () => {
    const message = await sendAndCaptureMessage();

    expect(message.notification.title).toBe("New class available!");
  });

  it("names the instructor and studio-local start time in the body", async () => {
    const message = await sendAndCaptureMessage();

    // 2026-04-29T09:00:00-04:00 rendered in America/New_York.
    expect(message.notification.body).toContain("Alex Toussaint");
    expect(message.notification.body).toContain('"45 min Club Bangers Ride"');
    expect(message.notification.body).toContain("9:00");
  });

  it("falls back when a class has no instructor", async () => {
    const message = await sendAndCaptureMessage((c) => {
      c.instructors = [];
    });

    expect(message.notification.body).toContain("Unknown instructor");
  });

  it("carries the class metadata clients need to deep-link", async () => {
    const message = await sendAndCaptureMessage();

    expect(message.data).toMatchObject({
      classId: "100",
      studioId: STUDIO_ID,
      studioLocation: "New York",
      changeType: "added",
      startsAt: "2026-04-29T09:00:00-04:00",
      waitingCount: "0",
    });
  });

  it("says a spot opened up when a class becomes free", async () => {
    withAlerts(buildAlert({ maxStatus: "free" }));
    alerter.handleChange(STUDIO_ID, [
      { old: buildRawClass(WAITLISTED), new: buildRawClass(FREE) },
    ]);
    await internals(alerter).processPendingNotifications();

    expect(sendEachForMulticast.mock.calls[0][0].notification).toMatchObject({
      title: "Spot opened up!",
    });
  });

  it("pluralizes the waitlist count", async () => {
    withAlerts(buildAlert({ maxStatus: "full", waitlistAlerts: true }));
    alerter.handleChange(STUDIO_ID, [
      {
        old: buildRawClass({ ...WAITLISTED, waiting_count: 2 }),
        new: buildRawClass({ ...WAITLISTED, waiting_count: 1 }),
      },
    ]);
    await internals(alerter).processPendingNotifications();

    expect(sendEachForMulticast.mock.calls[0][0].notification.body).toContain(
      "1 person on the waitlist"
    );
  });

  it("deep-links a waitlist change to the waitlist-alert screen", async () => {
    withAlerts(buildAlert({ maxStatus: "full", waitlistAlerts: true }));
    alerter.handleChange(STUDIO_ID, [
      {
        old: buildRawClass({ ...WAITLISTED, waiting_count: 2 }),
        new: buildRawClass({ ...WAITLISTED, waiting_count: 3 }),
      },
    ]);
    await internals(alerter).processPendingNotifications();

    const link = sendEachForMulticast.mock.calls[0][0].webpush.fcmOptions.link;
    expect(link).toContain("#/waitlist-alert?");
    expect(link).toContain("classId=100");
    expect(link).toContain("waitingCount=3");
  });

  it("deep-links other changes to the class url", async () => {
    const message = await sendAndCaptureMessage();

    expect(message.webpush.fcmOptions.link).toContain(
      `classUrl=${encodeURIComponent(
        "https://studio.onepeloton.com/classes/100"
      )}`
    );
  });

  it("logs instead of sending outside production", async () => {
    process.env.NODE_ENV = "development";
    withAlerts(buildAlert());

    alerter.handleAddition(STUDIO_ID, [buildRawClass(FREE)]);
    await internals(alerter).processPendingNotifications();

    expect(sendEachForMulticast).not.toHaveBeenCalled();
  });

  it("removes a token the FCM response reports as unregistered", async () => {
    internals(alerter).handleMessagingTokens({
      [USER_ID]: { "good-token": true, "stale-token": true },
    });
    sendEachForMulticast.mockResolvedValue({
      successCount: 1,
      failureCount: 1,
      responses: [
        { success: true },
        {
          success: false,
          error: { code: "messaging/registration-token-not-registered" },
        },
      ],
    });
    withAlerts(buildAlert());

    alerter.handleAddition(STUDIO_ID, [buildRawClass(FREE)]);
    await internals(alerter).processPendingNotifications();

    expect(refCalls).toContain("messagingTokens/user-1/stale-token");
    expect(refCalls).not.toContain("messagingTokens/user-1/good-token");
  });

  it("keeps a token that failed for a transient reason", async () => {
    sendEachForMulticast.mockResolvedValue({
      successCount: 0,
      failureCount: 1,
      responses: [
        { success: false, error: { code: "messaging/server-unavailable" } },
      ],
    });
    withAlerts(buildAlert());

    alerter.handleAddition(STUDIO_ID, [buildRawClass(FREE)]);
    await internals(alerter).processPendingNotifications();

    expect(refCalls.filter((p) => p.startsWith("messagingTokens"))).toEqual([]);
  });
});

describe("waitlist fill times", () => {
  let classAddedAt: number;

  beforeEach(() => {
    classAddedAt = Date.now() - 90 * 60_000;
    // The class was found with its waitlist still empty, so the fill is timed
    // from here.
    snapshotValue = {
      [String(classAddedAt)]: {
        snapshotAt: classAddedAt,
        status: "waitlist",
        waitingCount: 0,
      },
    };
  });

  const fills = () => ({
    old: buildRawClass(WAITLISTED),
    new: buildRawClass(FULL),
  });

  it("records the fill time for every instructor on the class", async () => {
    alerter.handleChange(STUDIO_ID, [
      {
        old: buildRawClass(WAITLISTED),
        new: buildRawClass({
          ...FULL,
          instructors: [
            buildInstructor({ id: 1, name: "Alex" }),
            buildInstructor({ id: 2, name: "Robin" }),
          ],
        }),
      },
    ]);
    await vi.waitFor(() => expect(update).toHaveBeenCalled());

    expect(update.mock.calls[0][0]).toMatchObject({
      "selloutStats/1/100/timeToFullMs": 90 * 60_000,
      "selloutStats/1/100/instructorName": "Alex",
      "selloutStats/2/100/timeToFullMs": 90 * 60_000,
      "selloutStats/2/100/instructorName": "Robin",
      "selloutStats/1/100/addedAt": classAddedAt,
    });
  });

  it("times a waitlist that fills in one poll from the first sighting", async () => {
    alerter.handleChange(STUDIO_ID, [
      { old: buildRawClass(FREE), new: buildRawClass(FULL) },
    ]);
    await vi.waitFor(() => expect(update).toHaveBeenCalled());

    expect(update.mock.calls[0][0]).toMatchObject({
      "selloutStats/1/100/timeToFullMs": 90 * 60_000,
    });
  });

  it("skips a class first seen with people already waiting", async () => {
    snapshotValue = {
      [String(classAddedAt)]: {
        snapshotAt: classAddedAt,
        status: "waitlist",
        waitingCount: 6,
      },
    };

    alerter.handleChange(STUDIO_ID, [fills()]);
    await vi.waitFor(() =>
      expect(refCalls).toContain("classHistory/7248695/100")
    );

    expect(update).not.toHaveBeenCalled();
  });

  it("records a class only once", async () => {
    alerter.handleChange(STUDIO_ID, [fills()]);
    await vi.waitFor(() => expect(update).toHaveBeenCalledOnce());

    alerter.handleChange(STUDIO_ID, [fills()]);
    await Promise.resolve();

    expect(update).toHaveBeenCalledOnce();
  });

  it("keeps a fill time already stored for the class", async () => {
    storedValues["selloutStats/1/100/timeToFullMs"] = 12 * 60_000;

    alerter.handleChange(STUDIO_ID, [fills()]);
    await vi.waitFor(() =>
      expect(refCalls).toContain("selloutStats/1/100/timeToFullMs")
    );

    expect(update).not.toHaveBeenCalled();
  });

  it("skips the write when the class has no snapshot history", async () => {
    snapshotValue = null;

    alerter.handleChange(STUDIO_ID, [fills()]);
    await vi.waitFor(() =>
      expect(refCalls).toContain("classHistory/7248695/100")
    );

    expect(update).not.toHaveBeenCalled();
  });

  it("ignores snapshots newer than the crossing it is timing", async () => {
    snapshotValue = {
      [String(Date.now() + 60_000)]: {
        snapshotAt: Date.now() + 60_000,
        status: "waitlist",
        waitingCount: 0,
      },
    };

    alerter.handleChange(STUDIO_ID, [fills()]);
    await vi.waitFor(() =>
      expect(refCalls).toContain("classHistory/7248695/100")
    );

    expect(update).not.toHaveBeenCalled();
  });
});
