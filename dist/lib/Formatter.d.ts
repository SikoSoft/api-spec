import { FormatterConfig, FormatterEntry, FormatterMeta } from "../models/Formatter";
export declare function registerFormatter(id: string, meta: FormatterMeta): void;
export declare function applyFormatter(value: unknown, config: FormatterConfig): string;
export declare function listFormatters(): FormatterEntry[];
