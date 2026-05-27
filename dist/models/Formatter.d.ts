interface FormatterConfig {
    id: string;
    params?: Record<string, unknown>;
}
type FormatterFn = (value: unknown, params?: Record<string, unknown>) => string;
interface FormatterMeta {
    label: string;
    description: string;
    fn: FormatterFn;
}
export declare function registerFormatter(id: string, meta: FormatterMeta): void;
export declare function applyFormatter(value: unknown, config: FormatterConfig): string;
export declare function listFormatters(): Array<{
    id: string;
} & Omit<FormatterMeta, "fn">>;
export {};
