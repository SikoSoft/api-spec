import { Setting } from ".";

export enum ControlType {
  BOOLEAN = "boolean",
  NUMBER = "number",
  TEXT = "text",
  SELECT = "select",
}

export enum SettingGroup {
  PAGINATION = "pagination",
  LEXICOLOGY = "lexicology",
}

export interface SettingTypeConfig {
  [ControlType.BOOLEAN]: boolean;
  [ControlType.NUMBER]: number;
  [ControlType.TEXT]: string;
  [ControlType.SELECT]: string;
}

export enum SettingName {
  PAGINATION_TYPE = "paginationType",
  PAGINATION_PAGE_SIZE = "paginationPageSize",
  ENTITY_NAME = "entityName",
}

export enum PaginationType {
  LAZY = "lazy",
  NAVIGATION = "navigation",
}

export type PaginationIndex = keyof typeof PaginationType;
export type PaginationValue = (typeof PaginationType)[PaginationIndex];

export interface BooleanControl {
  type: ControlType.BOOLEAN;
}

export interface NumberControl {
  type: ControlType.NUMBER;
  min?: number;
  max?: number;
  step?: number;
}

export interface TextControl {
  type: ControlType.TEXT;
}

export interface SelectControl {
  type: ControlType.SELECT;
  options: any[];
}

export type Control =
  | BooleanControl
  | NumberControl
  | TextControl
  | SelectControl;

export interface BooleanSettingConfig {
  name: SettingName;
  value: boolean;
  control: BooleanControl;
  group: SettingGroup;
}

export interface NumberSettingConfig {
  name: SettingName;
  value: number;
  control: NumberControl;
  group: SettingGroup;
}

export interface TextSettingConfig {
  name: SettingName;
  value: string;
  control: TextControl | SelectControl;
  group: SettingGroup;
}

export interface PaginationTypeSettingConfig extends TextSettingConfig {
  name: SettingName.PAGINATION_TYPE;
  value: PaginationType;
  control: SelectControl;
  group: SettingGroup.PAGINATION;
}

export interface PaginationPageSizeSettingConfig extends NumberSettingConfig {
  name: SettingName.PAGINATION_PAGE_SIZE;
  value: number;
  control: NumberControl;
  group: SettingGroup.PAGINATION;
}

export interface EntityNameSettingConfig extends TextSettingConfig {
  name: SettingName.ENTITY_NAME;
  value: string;
  control: TextControl;
  group: SettingGroup.LEXICOLOGY;
}

export type SettingConfig =
  | PaginationTypeSettingConfig
  | PaginationPageSizeSettingConfig
  | EntityNameSettingConfig;

export type SettingsConfig = {
  [SettingName.PAGINATION_TYPE]: PaginationTypeSettingConfig;
  [SettingName.PAGINATION_PAGE_SIZE]: PaginationPageSizeSettingConfig;
  [SettingName.ENTITY_NAME]: EntityNameSettingConfig;
};

export const settingsConfig: SettingsConfig = {
  [SettingName.PAGINATION_TYPE]: {
    name: SettingName.PAGINATION_TYPE,
    value: PaginationType.LAZY,
    control: {
      type: ControlType.SELECT,
      options: [PaginationType.LAZY, PaginationType.NAVIGATION],
    },
    group: SettingGroup.PAGINATION,
  },
  [SettingName.PAGINATION_PAGE_SIZE]: {
    name: SettingName.PAGINATION_PAGE_SIZE,
    value: 10,
    control: { type: ControlType.NUMBER, min: 1, max: 100, step: 1 },
    group: SettingGroup.PAGINATION,
  },
  [SettingName.ENTITY_NAME]: {
    name: SettingName.ENTITY_NAME,
    value: "action",
    control: { type: ControlType.TEXT },
    group: SettingGroup.LEXICOLOGY,
  },
};

export type Setting = {
  [K in keyof SettingsConfig]: Partial<SettingsConfig[K]>;
}[keyof SettingsConfig];

export type Settings = {
  [Property in keyof SettingsConfig]: SettingsConfig[Property]["value"];
};

export const defaultSettings: Settings = {
  [SettingName.PAGINATION_TYPE]: PaginationType.LAZY,
  [SettingName.PAGINATION_PAGE_SIZE]: 10,
  [SettingName.ENTITY_NAME]: "action",
};
