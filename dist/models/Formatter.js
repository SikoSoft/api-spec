const registry = {};
export function registerFormatter(id, meta) {
    registry[id] = meta;
}
export function applyFormatter(value, config) {
    const entry = registry[config.id];
    if (!entry) {
        return String(value);
    }
    return entry.fn(value, config.params);
}
export function listFormatters() {
    return Object.entries(registry).map(([id, { label, description }]) => ({
        id,
        label,
        description,
    }));
}
// Each formatter is a self-contained registration:
// src/lib/formatters/ms-to-duration.ts
// import { registerFormatter } from '@/lib/formatters';
registerFormatter("ms_to_duration", {
    label: "Milliseconds → Duration",
    description: "Converts a millisecond count to a human-readable duration string.",
    fn: (value, params) => {
        const ms = Number(value);
        const mins = Math.floor(ms / 60000);
        const secs = Math.floor((ms % 60000) / 1000);
        // could use Intl, could use any library, could be pure logic
        return mins > 0 ? `${mins} min${mins !== 1 ? "s" : ""}` : `${secs}s`;
    },
});
//Registrations are side-effect imports — add them once at the app entry point:
// src/main.ts
//import '@/lib/formatters/ms-to-duration';
//import '@/lib/formatters/cents-to-currency';
//# sourceMappingURL=Formatter.js.map