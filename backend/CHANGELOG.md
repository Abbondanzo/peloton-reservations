## 0.0.25

- Replaced "Median time to waitlist" on the Stats page, which never had any data and never could. Studio classes reach the schedule feed with their seats already taken — across a full week of history, not one class was ever seen with a spot open — so the time a class takes to sell out cannot be observed by polling. The page now reports how long an instructor's classes take to fill their waitlist, which is measurable
- Waitlist fill times only count classes first seen with an empty waitlist. A class already part-way through filling when it was found would otherwise report a far shorter time and drag the median down
- A class whose waitlist drops a spot and fills again keeps its original fill time instead of overwriting it with the shorter one, including after a restart
- Fixed classes being marked full once 10 people were waiting, even when the class allowed a bigger waitlist. The class's own waitlist capacity is now used, so bookable status, alerts, and stats stay correct for classes that hold more
- Snapshots that a class's fill time is measured from are kept until the class has taken place, instead of being deleted after a week — previously the class's first sighting was usually gone by the time its waitlist filled. Snapshots for classes that have already happened are now dropped entirely
- Instructor stats no longer discard the fill time for a class the moment it is recorded, which could happen to a long-scheduled class once an instructor was at the 50-class cap
- Class status changes are now logged as they happen

## 0.0.24

- Fixed a bug where a failed attempt to record a class's sellout-speed milestone (time-to-waitlist or time-to-full) would be permanently skipped instead of retried on the next occurrence, with no error logged — this could silently suppress data on the Stats page
- Classes that go straight from open to full between polls (skipping the waitlist stage entirely, common for very popular instructors) now still get a time-to-waitlist figure recorded, using the time-to-full value as an upper-bound estimate, instead of leaving it blank

## 0.0.23

- Schedule fetches that fail with a transient server error (e.g. 502 from the Peloton API) are now retried with exponential backoff and jitter, up to 3 attempts, before giving up and throwing

## 0.0.22

- Added per-instructor class sellout-speed tracking, shown on the Stats page. For each instructor, the app now tracks how long each class takes to go from newly added to waitlisted, and separately, how long it takes for the waitlist to fill up. The last 50 classes per instructor are kept, and the Stats page shows the median of each measurement per instructor

## 0.0.21

- Alerts can now be individually disabled. A disabled alert is stored but never fires notifications until re-enabled
- Added a global "pause all" preference. When enabled, all notifications are suppressed for the user regardless of individual alert settings

## 0.0.20

- Waitlist alerts can now be scoped to specific classes. When an alert has a class selection configured, `waitlist_changed` notifications only fire for those classes rather than every class matching the alert's filters

## 0.0.19

- Added waitlist position alerts. Alerts with `waitlistAlerts` enabled now fire a `waitlist_changed` notification each time `waiting_count` changes for a matching class. Instructor, discipline, and schedule filters apply; the bookable-status threshold is ignored so the check works even when the class is full. Each distinct count value gets its own debounce key so every shift fires independently. The notification links to a dedicated in-app page (`/waitlist-alert`) rather than the class listing, prompting the user to check their email for the 2-hour acceptance window

## 0.0.18

- Push notifications now link directly to the Peloton class booking page instead of the app root. Added a `frontend_url` add-on option (set it to your hosted app URL, e.g. `https://abbondanzo.github.io/peloton-reservations`) so the notification click lands on the correct subpath and immediately redirects to the class

## 0.0.17

- Added class history storage: the backend now writes snapshots to Firebase (`classHistory/{studioId}/{classId}`) whenever a class first appears or its bookable status changes (free ↔ waitlist ↔ full). Snapshots are retained for 7 days via an hourly cleanup job
- Fixed alert matching incorrectly comparing numeric discipline IDs against string values stored in Firebase — all IDs are now normalised to strings at the API boundary

## 0.0.16

- Fixed time-range alert filtering incorrectly rejecting valid classes due to an inverted timezone offset. Classes were being shifted in the wrong direction when converting UTC timestamps to the studio's local timezone, causing day-of-week and time-of-day checks to fail

## 0.0.15

- Fixed metrics for added and removed class counts not reliably persisting to the database. Writes were fire-and-forget with no error handling; low-frequency counters (e.g. one "added" event per day) could be silently dropped on a transient failure. Writes are now batched into a single `update()` call and properly awaited

## 0.0.14

- Class schedule fetching now paginates through all available results rather than stopping at the first page
- Fixed alert filtering for disciplines and instructors. Peloton API returns numeric IDs which are now correctly compared against stored alert filters

## 0.0.13

- No backend changes — version bump to align with frontend PWA notification fixes for iOS

## 0.0.12

- Added optional Sentry DSN configuration option

## 0.0.11

- Pre-built Docker image now published to GitHub Container Registry — Home Assistant pulls the image directly instead of building from source, significantly reducing install and update time

## 0.0.10

- Initial release
