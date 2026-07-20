import { FormatterMeta } from "../models/Formatter";
export declare const registry: Record<string, FormatterMeta>;
export declare function registerFormatter(id: string, meta: FormatterMeta): void;
