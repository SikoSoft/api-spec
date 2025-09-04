export declare enum DataType {
    BOOLEAN = "boolean",
    IMAGE = "image",
    INT = "int",
    LONG_TEXT = "longText",
    SHORT_TEXT = "shortText"
}
export declare enum RenderType {
    TEXT = "text",
    IMAGE = "image",
    NUMBER = "number",
    HIDDEN = "hidden"
}
export interface EntityPropertyConfig {
    entityConfigId: number;
    id: number;
    name: string;
    prefix: string;
    suffix: string;
    required: number;
    repeat: number;
    allowed: number;
    dataType: DataType;
    renderType: RenderType;
}
export declare const defaultEntityPropertyConfig: EntityPropertyConfig;
export interface EntityConfig {
    id: number;
    name: string;
    properties: EntityPropertyConfig[];
}
export declare const defaultEntityConfig: EntityConfig;
export interface IntValueConfig {
    id: number;
    value: number;
}
export interface TextValueConfig {
    id: number;
    value: string;
}
export interface BooleanValueConfig {
    id: number;
    value: boolean;
}
export type ValueConfig = IntValueConfig | TextValueConfig | BooleanValueConfig;
export interface PropertyConfig {
    id: number;
    name: string;
    prefix: string;
    suffix: string;
    required: number;
    repeat: number;
    allowed: number;
    renderType: RenderType;
}
export interface Entity {
    id: number;
    name: string;
    properties: PropertyConfig[];
}
export interface Entity {
    id: number;
    name: string;
    properties: PropertyConfig[];
}
export interface CommonProperty {
    id: number;
    propertyId: number;
}
export interface TextProperty extends CommonProperty {
    value: string;
}
export interface ImageProperty extends CommonProperty {
    value: {
        src: string;
        alt: string;
    };
}
export type ItemProperty = TextProperty | ImageProperty;
export interface Item {
    id: number;
    type: number;
    properties: ItemProperty[];
}
export interface EntityItem {
    id: number;
    type: string;
    createdAt: string;
    updatedAt: string;
    tags: string[];
}
