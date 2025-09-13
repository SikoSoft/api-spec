export enum DataType {
  BOOLEAN = "boolean",
  IMAGE = "image",
  INT = "int",
  LONG_TEXT = "longText",
  SHORT_TEXT = "shortText",
}

export enum RenderType {
  TEXT = "text",
  IMAGE = "image",
  NUMBER = "number",
  HIDDEN = "hidden",
}

export type BooleanDataValue = boolean;

export type IntDataValue = number;

export type ImageDataValue = {
  src: string;
  alt: string;
};

export type LongTextDataValue = string;

export type ShortTextDataValue = string;

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
  renderType: RenderType;
  dataType: DataType;
}

export interface BooleanEntityPropertyConfig
  extends CommonEntityPropertyConfig {
  dataType: DataType.BOOLEAN;
  defaultValue: boolean;
}

export interface IntEntityPropertyConfig extends CommonEntityPropertyConfig {
  dataType: DataType.INT;
  defaultValue: number;
}

export interface ImageEntityPropertyConfig extends CommonEntityPropertyConfig {
  dataType: DataType.IMAGE;
  defaultValue: ImageDataValue;
}

export interface LongTextEntityPropertyConfig
  extends CommonEntityPropertyConfig {
  dataType: DataType.LONG_TEXT;
  defaultValue: LongTextDataValue;
}

export interface ShortTextEntityPropertyConfig
  extends CommonEntityPropertyConfig {
  dataType: DataType.SHORT_TEXT;
  defaultValue: ShortTextDataValue;
}

export type EntityPropertyConfig =
  | BooleanEntityPropertyConfig
  | IntEntityPropertyConfig
  | ImageEntityPropertyConfig
  | LongTextEntityPropertyConfig
  | ShortTextEntityPropertyConfig;

export const defaultEntityPropertyConfig: EntityPropertyConfig = {
  entityConfigId: 0,
  id: 0,
  userId: "",
  name: "",
  prefix: "",
  suffix: "",
  required: 0,
  repeat: 1,
  allowed: 1,
  dataType: DataType.SHORT_TEXT,
  renderType: RenderType.TEXT,
  defaultValue: "",
};

export interface EntityConfig {
  id: number;
  userId: string;
  name: string;
  description: string;
  properties: EntityPropertyConfig[];
}

export const defaultEntityConfig: EntityConfig = {
  id: 0,
  userId: "",
  name: "",
  description: "",
  properties: [],
};

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
