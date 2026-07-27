import { DataType } from "./Entity";

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

export const supportedDataTypes: DataType[] = [
  DataType.SHORT_TEXT,
  DataType.LONG_TEXT,
  DataType.INT,
];
