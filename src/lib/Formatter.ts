import { DataType } from "../models/Entity";
import { supportedDataTypes } from "../models/Formatter";

export function dataTypeSupportsFormatter(dataType: DataType): boolean {
  return supportedDataTypes.includes(dataType);
}
