export interface FormatterConfig {
  id: string;
}

export type FormatterFn = (value: unknown) => string;

export interface FormatterMeta {
  label: string;
  description: string;
  fn: FormatterFn;
}

export interface FormatterEntry {
  id: string;
  label: string;
  description: string;
}
