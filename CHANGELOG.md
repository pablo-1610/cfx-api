# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.1] - 2026-06-28

### Changed

- Switched the license to MIT so the `LICENSE` file and `package.json` match.
- Reworked the README with badges, a table of contents, a feature list and usage recipes.
- Updated the repository description and topics for better discoverability.

## [2.0.0] - 2026-06-28

### Added

- `servers.all(filters)` decodes the protobuf `streamRedir` feed into `CitizenServer` objects, with client-side filters (locale, gametype, min/max players, tag, search, limit).
- Featured servers module (`servers.featured()`).
- Server icon module (`servers.icon()` and `servers.iconUrl()`).
- Direct game server queries (`servers.info()`, `servers.dynamic()`, `servers.players()`).
- Enriched `CitizenServer` helpers: `joinUrl`, `connectEndpoint`, `locale`, `isFiveM`, `isRedM`, parsed `tags`, banners and more.

### Changed

- Public API restructured around the `servers` and `status` namespaces, with `fetch*` aliases kept for convenience.
- Server data now comes from `frontend.cfx-services.net`.
- Status now comes from `citizenfx.statuspage.io`.
- Toolchain upgraded to TypeScript 6, ESLint 10 (flat config) and Jest 30, with the latest dependencies.
- Test suite rewritten with real assertions; CI runs on Node 20.

### Removed

- The pinned servers API and the previous flat exports are replaced by the `servers` and `status` namespaces.

### Fixed

- `tags` is now parsed into a real array.
- `status.fetchComponents()` returns proper status component instances.

## [1.2.31] - 2024-08-21

- Last release of the 1.x line.

[unreleased]: https://github.com/pablo-1610/cfx-api/compare/v2.0.1...HEAD
[2.0.1]: https://github.com/pablo-1610/cfx-api/releases/tag/v2.0.1
[2.0.0]: https://github.com/pablo-1610/cfx-api/releases/tag/v2.0.0
[1.2.31]: https://www.npmjs.com/package/cfx-api/v/1.2.31
