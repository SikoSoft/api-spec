const registry = {};
export function registerFormatter(id, meta) {
    registry[id] = meta;
}
export function applyFormatter(value, config) {
    const entry = registry[config.id];
    if (!entry) {
        return String(value);
    }
    return entry.fn(value);
}
export function listFormatters() {
    return Object.entries(registry).map(([id, { label, description }]) => ({
        id,
        label,
        description,
    }));
}
//# sourceMappingURL=Formatter.js.map