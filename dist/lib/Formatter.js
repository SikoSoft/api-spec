import { registry, registerFormatter } from "./FormatterRegistry";
import "./formatters/ms-to-duration";
export { registerFormatter };
export function applyFormatters(value, ids) {
    const applyAll = !ids || ids.length === 0;
    const idsToApply = applyAll ? Object.keys(registry) : ids;
    console.log(`[Formatter] applyFormatters called — value:`, value, `| ids: ${applyAll ? '(all)' : idsToApply.join(', ')}`);
    const result = idsToApply.reduce((current, id) => {
        const entry = registry[id];
        if (!entry) {
            console.warn(`[Formatter] unknown formatter id: "${id}" — skipping`);
            return current;
        }
        const output = entry.fn(current);
        console.log(`[Formatter] applied "${id}": ${JSON.stringify(current)} → ${JSON.stringify(output)}`);
        return output;
    }, String(value));
    console.log(`[Formatter] applyFormatters final result:`, result);
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