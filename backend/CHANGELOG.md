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
