export declare enum DataType {
    BOOLEAN = "boolean",
    DATE = "date",
    IMAGE = "image",
    INT = "int",
    LONG_TEXT = "longText",
    SHORT_TEXT = "shortText"
}
export type BooleanDataValue = boolean;
export type ImageDataValue = {
    src: string;
    alt: string;
};
export type IntDataValue = number;
export type DateDataValue = Date | null;
export type LongTextDataValue = string;
export type ShortTextDataValue = string;
export type PropertyDataValue = BooleanDataValue | ImageDataValue | IntDataValue | DateDataValue | LongTextDataValue | ShortTextDataValue;
export interface CommonEntityPropertyConfig {
    entityConfigId: number;
    id: number;
    userId: string;
    name: string;
    prefix: string;
    suffix: string;
    required: number;
    repeat: number;
    allowed: number;
    hidden: boolean;
}
export interface BooleanDataTypedValue {
    dataType: DataType.BOOLEAN;
    defaultValue: BooleanDataValue;
}
export interface ImageDataTypedValue {
    dataType: DataType.IMAGE;
    defaultValue: ImageDataValue;
}
export interface IntDataTypedValue {
    dataType: DataType.INT;
    defaultValue: IntDataValue;
}
export interface DateDataTypedValue {
    dataType: DataType.DATE;
    defaultValue: DateDataValue;
}
export interface LongTextDataTypedValue {
    dataType: DataType.LONG_TEXT;
    defaultValue: LongTextDataValue;
}
export interface ShortTextDataTypedValue {
    dataType: DataType.SHORT_TEXT;
    defaultValue: ShortTextDataValue;
}
export type DataTypedValue = BooleanDataTypedValue | ImageDataTypedValue | IntDataTypedValue | DateDataTypedValue | LongTextDataTypedValue | ShortTextDataTypedValue;
export interface BooleanEntityPropertyConfig extends CommonEntityPropertyConfig, BooleanDataTypedValue {
}
export interface ImageEntityPropertyConfig extends CommonEntityPropertyConfig, ImageDataTypedValue {
}
export interface IntEntityPropertyConfig extends CommonEntityPropertyConfig, IntDataTypedValue {
}
export interface DateEntityPropertyConfig extends CommonEntityPropertyConfig, DateDataTypedValue {
}
export interface LongTextEntityPropertyConfig extends CommonEntityPropertyConfig, LongTextDataTypedValue {
}
export interface ShortTextEntityPropertyConfig extends CommonEntityPropertyConfig, ShortTextDataTypedValue {
}
export type EntityPropertyConfig = BooleanEntityPropertyConfig | ImageEntityPropertyConfig | IntEntityPropertyConfig | DateEntityPropertyConfig | LongTextEntityPropertyConfig | ShortTextEntityPropertyConfig;
export declare const defaultEntityPropertyConfig: EntityPropertyConfig;
export interface EntityConfig {
    id: number;
    userId: string;
    name: string;
    description: string;
    properties: EntityPropertyConfig[];
    revisionOf: null | number;
    allowPropertyOrdering: boolean;
}
export declare const defaultEntityConfig: EntityConfig;
export interface EntityProperty {
    id: number;
    propertyConfigId: number;
    value: PropertyDataValue;
    order: number;
}
export interface Entity {
    id: number;
    type: number;
    createdAt: string;
    updatedAt: string;
    tags: string[];
    properties: EntityProperty[];
}
