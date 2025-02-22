export enum ControlType {
  BOOLEAN = "boolean",
  NUMBER = "number",
  TEXT = "text",
  SELECT = "select",
}

export enum SettingGroup {
  PAGINATION = "pagination",
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

export interface PaginationTypeSettingConfig {
  name: SettingName.PAGINATION_TYPE;
  value: PaginationType;
  control: SelectControl;
  group: SettingGroup.PAGINATION;
}

export interface PaginationPageSizeSettingConfig {
  name: SettingName.PAGINATION_PAGE_SIZE;
  value: number;
  control: NumberControl;
  group: SettingGroup.PAGINATION;
}

export type SettingConfig =
  | PaginationTypeSettingConfig
  | PaginationPageSizeSettingConfig;

export type SettingsConfig = {
  [SettingName.PAGINATION_TYPE]: PaginationTypeSettingConfig;
  [SettingName.PAGINATION_PAGE_SIZE]: PaginationPageSizeSettingConfig;
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
};
