import {
  FormatterConfig,
  FormatterEntry,
  FormatterMeta,
} from "../models/Formatter";

const registry: Record<string, FormatterMeta> = {};

export function registerFormatter(id: string, meta: FormatterMeta): void {
  registry[id] = meta;
}

export function applyFormatter(
  value: unknown,
  config: FormatterConfig
): string {
  const entry = registry[config.id];
  if (!entry) {
    return String(value);
  }
  return entry.fn(value);
}

export function listFormatters(): FormatterEntry[] {
  return Object.entries(registry).map(([id, { label, description }]) => ({
    id,
    label,
    description,
  }));
}
