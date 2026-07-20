export const registry = {};
export function registerFormatter(id, meta) {
    console.log(`[Formatter] registering formatter: ${id}`);
    registry[id] = meta;
    console.log(`[Formatter] registry now contains: ${Object.keys(registry).join(', ')}`);
}
//# sourceMappingURL=FormatterRegistry.js.map