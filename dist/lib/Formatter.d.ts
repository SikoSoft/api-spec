import { DataType, PropertyDataValue } from "../models/Entity";
import { FormatterEntry } from "../models/Formatter";
import { registerFormatter } from "./FormatterRegistry";
import "./formatters/ms-to-duration";
export { registerFormatter };
export declare function applyFormatters(value: unknown, ids?: string[]): PropertyDataValue;
export declare function listFormatters(): FormatterEntry[];
export declare function dataTypeSupportsFormatter(dataType: DataType): boolean;
