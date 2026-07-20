import { FormatterEntry } from "../models/Formatter";
import { registerFormatter } from "./FormatterRegistry";
import "./formatters/ms-to-duration";
export { registerFormatter };
export declare function applyFormatters(value: unknown, ids?: string[]): string;
export declare function listFormatters(): FormatterEntry[];
