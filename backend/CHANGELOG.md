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
