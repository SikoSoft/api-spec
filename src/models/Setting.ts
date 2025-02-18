export enum SettingType {
  TOGGLE = "toggle",
  NUMBER = "number",
  TEXT = "text",
}

export interface SettingTypeConfig {
  [SettingType.TOGGLE]: boolean;
  [SettingType.NUMBER]: number;
  [SettingType.TEXT]: string;
}

export enum SettingName {
  PAGINATION_TYPE = "paginationType",
  PAGINATION_PAGE_SIZE = "paginationPageSize",
}

export enum PaginationType {
  LAZY = "lazy",
  NAVIGATION = "navigation",
}

export interface SettingConfig {
  valueType: any;
  controlType: SettingType;
}

export type PaginationIndex = keyof typeof PaginationType;
export type PaginationValue = (typeof PaginationType)[PaginationIndex];

export type SettingsConfig = {
  [SettingName.PAGINATION_TYPE]: {
    value: PaginationType;
    control: SettingType.TEXT;
  };
  [SettingName.PAGINATION_PAGE_SIZE]: {
    value: number;
    control: SettingType.NUMBER;
  };
};

export type Setting = {
  [K in keyof SettingsConfig]: { name: K; value: SettingsConfig[K] };
}[keyof SettingsConfig];

export type Settings = {
  [Property in keyof SettingsConfig]: SettingsConfig[Property]["value"];
};

export const defaultSettings: Settings = {
  paginationType: PaginationType.LAZY,
  paginationPageSize: 10,
};
