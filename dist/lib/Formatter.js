const registry = {};
export function registerFormatter(id, meta) {
    console.log(`[Formatter] registering formatter: ${id}`);
    registry[id] = meta;
    console.log(`[Formatter] registry now contains: ${Object.keys(registry).join(', ')}`);
}
export function applyFormatter(value, config) {
    console.log(`[Formatter] applyFormatter called — id: ${config.id}, value:`, value);
    const entry = registry[config.id];
    if (!entry) {
        console.warn(`[Formatter] no formatter found for id: ${config.id} — returning String(value)`);
        return String(value);
    }
    const result = entry.fn(value);
    console.log(`[Formatter] applyFormatter result:`, result);
    return result;
}
export function listFormatters() {
    const entries = Object.entries(registry).map(([id, { label, description }]) => ({
        id,
        label,
        description,
    }));
    console.log(`[Formatter] listFormatters called — ${entries.length} formatter(s):`, entries.map(e => e.id));
    return entries;
}
//# sourceMappingURL=Formatter.js.map