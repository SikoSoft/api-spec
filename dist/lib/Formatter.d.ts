import { FormatterEntry, FormatterMeta } from "../models/Formatter";
import "./formatters/ms-to-duration";
export declare function registerFormatter(id: string, meta: FormatterMeta): void;
export declare function applyFormatters(value: unknown, ids?: string[]): string;
export declare function listFormatters(): FormatterEntry[];
