import {
  FormatterConfig,
  FormatterEntry,
  FormatterMeta,
} from "../models/Formatter";

const registry: Record<string, FormatterMeta> = {};

export function registerFormatter(id: string, meta: FormatterMeta): void {
  console.log(`[Formatter] registering formatter: ${id}`);
  registry[id] = meta;
  console.log(`[Formatter] registry now contains: ${Object.keys(registry).join(', ')}`);
}

export function applyFormatters(value: unknown, ids?: string[]): string {
  const applyAll = !ids || ids.length === 0;
  const idsToApply = applyAll ? Object.keys(registry) : ids;

  console.log(
    `[Formatter] applyFormatters called — value:`, value,
    `| ids: ${applyAll ? '(all)' : idsToApply.join(', ')}`
  );

  const result = idsToApply.reduce<string>((current, id) => {
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

export function listFormatters(): FormatterEntry[] {
  const entries = Object.entries(registry).map(([id, { label, description }]) => ({
    id,
    label,
    description,
  }));
  console.log(`[Formatter] listFormatters called — ${entries.length} formatter(s):`, entries.map(e => e.id));
  return entries;
}
