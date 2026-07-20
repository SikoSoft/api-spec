import { FormatterMeta } from "../models/Formatter";

export const registry: Record<string, FormatterMeta> = {};

export function registerFormatter(id: string, meta: FormatterMeta): void {
  console.log(`[Formatter] registering formatter: ${id}`);
  registry[id] = meta;
  console.log(`[Formatter] registry now contains: ${Object.keys(registry).join(', ')}`);
}
