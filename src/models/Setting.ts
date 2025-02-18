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
  [SettingName.PAGINATION_TYPE]: PaginationType;
  [SettingName.PAGINATION_PAGE_SIZE]: number;
}

export type Setting = {
  [K in keyof SettingConfig]: { name: K; value: SettingConfig[K] };
}[keyof SettingConfig];

export type Settings = {
  [Property in keyof SettingConfig]: SettingConfig[Property];
};

export const defaultSettings: Settings = {
  paginationType: PaginationType.LAZY,
  paginationPageSize: 10,
};
