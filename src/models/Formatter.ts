import { DataType, PropertyDataValue } from "./Entity";

export enum FormatterId {
  MS_TO_DURATION = "ms_to_duration",
}

export interface FormatterConfig {
  id: string;
}

export type FormatterFn = (value: PropertyDataValue) => PropertyDataValue;

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
