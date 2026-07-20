# Formatter System

## Concepts

### FormatterConfig

`FormatterConfig` (`api-spec/models/Formatter`) is the shape stored in the database. It holds the ID of a registered formatter that should be applied to a property's value at display time.

```ts
{ id: 'ms_to_duration' }
```

An entity property may carry a `FormatterConfig` alongside its raw value. The raw value is always stored; formatting is a display-only concern.

### The Registry

`api-spec/lib/Formatter` maintains a module-scoped registry of named formatter functions. Formatters are registered once at app startup and remain available for the lifetime of the session. The registry is keyed by formatter ID — the same ID stored in `FormatterConfig`.

### Formatter Functions

Each formatter is a pure function `(value: unknown) => string`. It receives a value and returns a display string. When multiple formatters are chained (see below), each receives the string output of the previous one, so only the first formatter in a chain sees the raw value.

### Side-Effect Registration

Formatters register themselves as a side-effect of being imported. `api-spec/lib/Formatter` imports all built-in formatters directly, so any consumer that imports `applyFormatters` or `listFormatters` automatically gets a fully populated registry — no additional imports required.

Adding a new formatter to the spec therefore only requires creating the formatter file and importing it inside `src/lib/Formatter.ts`; consumer apps need no changes.

---

## API

### `registerFormatter(id, meta)`

Adds a formatter to the registry. Called internally by each formatter module. Not typically called by consumers directly.

### `applyFormatters(value, ids?)`

Applies a chain of formatters to `value` and returns the final string.

- **`value`** — the raw property value (any type).
- **`ids`** — optional array of formatter IDs to apply, in order. If omitted or empty, all registered formatters are applied in registration order.

Each formatter in the chain receives the string output of the previous one. Unknown IDs are skipped with a console warning.

```ts
applyFormatters(90000);                        // all registered formatters
applyFormatters(90000, ['ms_to_duration']);     // only this one
applyFormatters(90000, ['ms_to_duration', 'some_other']); // chained
```

### `listFormatters()`

Returns an array of `{ id, label, description }` for all registered formatters. Intended for UI — use this to populate a formatter picker so users can assign formatters to entity properties.

---

## Real-World Scenarios

### Scenario 1: Single entity with a duration property

A user has a "Workout" entity. One of its properties is "Duration", stored as milliseconds. The property's `FormatterConfig` is `{ id: 'ms_to_duration' }`.

When the property is rendered:

```ts
// property.formatterConfig = { id: 'ms_to_duration' }
// property.value = 5400000

const display = applyFormatters(property.value, [property.formatterConfig.id]);
// → '90 mins'
```

### Scenario 2: Multiple entities on the same page with different formatters

A page displays a list of mixed entity types. A "Run" entity has a "Distance" property with no formatter (raw km value) and a "Time" property with `{ id: 'ms_to_duration' }`. A "Purchase" entity has a "Price" property with `{ id: 'cents_to_currency' }` and a "Notes" property with no formatter.

Each property is rendered independently, passing only its own formatter ID:

```ts
// Run — Time property
applyFormatters(3720000, ['ms_to_duration']); // → '62 mins'

// Run — Distance property (no formatter)
applyFormatters(10.5, []); // → all registered formatters applied; assign no formatter by passing a specific ID or omit and handle at the call site

// Purchase — Price property
applyFormatters(4299, ['cents_to_currency']); // → '$42.99'
```

Each entity controls which formatters apply to each of its properties. The registry holds all available formatters; individual properties opt in to specific ones via their stored `FormatterConfig`.

### Scenario 3: Formatter picker UI

A settings screen lets users assign a formatter to a property. The UI calls `listFormatters()` to populate a dropdown:

```ts
const options = listFormatters();
// [
//   { id: 'ms_to_duration', label: 'Milliseconds → Duration', description: '...' },
//   { id: 'cents_to_currency', label: 'Cents → Currency', description: '...' },
// ]
```

The user selects one; the choice is saved as a `FormatterConfig` on the property.

---

## Adding a New Formatter

1. Create `src/lib/formatters/<name>.ts` — call `registerFormatter` with an ID, label, description, and `fn`.
2. Add `import './formatters/<name>';` to `src/lib/Formatter.ts` alongside the other formatter imports.
3. Add the entry to the `package.json` exports map:
   ```json
   "./lib/formatters/<name>": {
     "types": "./dist/lib/formatters/<name>.d.ts",
     "default": "./dist/lib/formatters/<name>.js"
   }
   ```

Consumer apps require no changes — the new formatter is available immediately via `listFormatters()` and `applyFormatters()`.
