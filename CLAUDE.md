# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

`api-spec` is the shared contract between `gapi` (backend) and `orbit` / `activity-logger` (frontend). It contains TypeScript interfaces, enums, default values, and two runtime utility classes. Consumers import from the named exports in `package.json` (e.g. `api-spec/models/Entity`, `api-spec/lib/Api`).

## Commands

```bash
npm run build   # tsc — compiles src/ → dist/
npm run watch   # tsc --w — watch mode during development
npm run clean   # rimraf dist
```

There are no tests and no linter configured in this project.

After any change, run `npm run build` to verify types compile cleanly. Downstream projects (`gapi`, `orbit`) consume `dist/`, so changes must be built before bumping the version and publishing.

## Architecture

### `src/models/` — pure TypeScript (interfaces, enums, const defaults)

Each file owns one domain area:

| File | What it defines |
|---|---|
| `Entity.ts` | `DataType` enum, typed property value unions, `EntityPropertyConfig` discriminated union (one variant per `DataType`), `EntityConfig`, `Entity` |
| `List.ts` | `ListFilter`, `ListSort`, `ListConfig`, `ListContext`, and their enums/defaults |
| `Setting.ts` | `SettingName`, `ControlType`, `SettingGroup` enums; per-setting config interfaces; `SettingsConfig` map; `settingsConfig` constant; `Settings` type (name→value map) |
| `Operation.ts` | `OperationType` enum; per-operation interfaces; `BulkOperation` |
| `Access.ts` | `AccessPolicy`, `AccessPolicyParty` discriminated union |
| `Revision.ts` | `RevisionDriftType` enum, `RevisionCheckResult`, slim `RevisionEntityConfig` / `RevisionEntityPropertyConfig` types |
| `Introspection.ts` | `Introspection` union (logged-in vs anonymous, with/without Google link) |
| `Identity.ts` | `User`, `UserGoogleAccount`, `Role` enum |
| `Workspace.ts` | `Workspace` |
| `Data.ts` | Export/import data shapes (`ExportDataContents`, `NukedDataType`, etc.) |
| `Asset.ts` | Draft/unused high-level asset abstraction |

### `src/lib/` — runtime utility classes

- **`Api`** (`src/lib/Api.ts`) — thin fetch wrapper. Instantiate with `{ authToken, baseUrl, errorHandler }`. Methods: `get`, `post`, `put`, `delete`. Returns `ApiResult<T>` (`{ status, response }` or `null` on network failure). Automatically appends the `authorization` header; calls `errorHandler()` on 403. Statuses 202/204 are treated as empty bodies.
- **`ListConfig`** (`src/lib/ListConfig.ts`) — static helper; `ListConfig.entitySatisfiesFilter(entity, listFilter)` evaluates client-side filtering logic.
- **`Revision`** (`src/lib/Revision.ts`) — static helpers for validating whether an `EntityConfig` change is safe without creating a new revision (`propertiesAreSafe`, `propertyIsSafe`, drift detection).

### `mock/`

Static JSON fixtures (`entities.json`, `items.json`, `properties.json`) exported via `package.json` exports map for use in tests or storybook in downstream projects.

## Key patterns

**Discriminated unions with typed defaults** — new property/setting types follow the pattern of: a per-variant interface extending a common base + a data-type-specific interface, a union type, and a `default*` const. See `EntityPropertyConfig` and `SettingConfig` for the established shape.

**`SettingsConfig` map** — `settingsConfig` is the authoritative runtime registry of all settings. `Settings` (the value-only map) and `Setting` (the union of individual setting objects) are derived from it via mapped types. When adding a new setting: add to `SettingName`, create the config interface, add to `SettingsConfig`, add to `settingsConfig` const, and update `defaultSettings`.

**Exports map** — `package.json` uses explicit `exports` entries. Every new public module must be added there alongside the corresponding `"types"` and `"default"` paths pointing into `dist/`.
