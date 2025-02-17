import { ListConfig } from "./List";

export enum SettingType {
  TOGGLE = "toggle",
  NUMBER = "number",
  TEXT = "text",
}

export enum SettingName {
  PAGINATION_TYPE = "paginationType",
  PAGINATION_PAGE_SIZE = "paginationPageSize",
}

export interface SettingConfig {
  [SettingName.PAGINATION_TYPE]: SettingType.TEXT;
  [SettingName.PAGINATION_PAGE_SIZE]: SettingType.NUMBER;
}

export interface Settings {
  listConfig: ListConfig;
  settings: { [Property in keyof SettingConfig]: SettingConfig[Property] };
}
