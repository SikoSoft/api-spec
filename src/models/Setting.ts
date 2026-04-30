export enum ControlType {
  BOOLEAN = "boolean",
  NUMBER = "number",
  TEXT = "text",
  SELECT = "select",
}

export enum SettingGroup {
  ACCESS = "access",
  PAGINATION = "pagination",
  LEXICOLOGY = "lexicology",
  AUTO_COMPLETE = "autoComplete",
  LIST_CONFIG = "listConfig",
  AI = "ai",
  MISC = "misc",
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
  TAG_SUGGESTIONS = "tagSuggestions",
  PUBLIC = "public",
  ASSIST_SAVE_IMAGE = "assistSaveImage",
  DEFAULT_LIST_CONFIG = "defaultListConfig",
  REQUEST_DEBOUNCE_DELAY = "requestDebounceDelay",
}

export enum PaginationType {
  LAZY = "lazy",
  NAVIGATION = "navigation",
  MORE_BUTTON = "moreButton",
}

export enum TagSuggestions {
  DISABLED = "disabled",
  ONLY_IN_LIST = "onlyInList",
  ALL = "all",
}

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

export enum SettingContextType {
  LIST = "list",
  USER = "user",
  APP = "app",
}

export interface CommonSettingConfig {
  name: SettingName;
  control: Control;
  group: SettingGroup;
  defaultValue: SettingTypeConfig[ControlType];
  context: SettingContextType[];
}

export interface BooleanSettingConfig extends CommonSettingConfig {
  control: BooleanControl;
  defaultValue: boolean;
}

export interface NumberSettingConfig extends CommonSettingConfig {
  control: NumberControl;
  defaultValue: number;
}

export interface TextSettingConfig extends CommonSettingConfig {
  control: TextControl | SelectControl;
  defaultValue: string;
}

export interface PaginationTypeSettingConfig extends TextSettingConfig {
  name: SettingName.PAGINATION_TYPE;
  control: SelectControl;
  defaultValue: PaginationType;
  group: SettingGroup.PAGINATION;
}

export interface PaginationPageSizeSettingConfig extends NumberSettingConfig {
  name: SettingName.PAGINATION_PAGE_SIZE;
  group: SettingGroup.PAGINATION;
}

export interface TagSuggestionsSettingConfig extends TextSettingConfig {
  name: SettingName.TAG_SUGGESTIONS;
  control: SelectControl;
  defaultValue: TagSuggestions;
  group: SettingGroup.AUTO_COMPLETE;
}

export interface PublicSettingConfig extends BooleanSettingConfig {
  name: SettingName.PUBLIC;
  group: SettingGroup.ACCESS;
}

export interface AssistSaveImageSettingConfig extends BooleanSettingConfig {
  name: SettingName.ASSIST_SAVE_IMAGE;
  group: SettingGroup.AI;
}

export interface DefaultListConfigSettingConfig extends TextSettingConfig {
  name: SettingName.DEFAULT_LIST_CONFIG;
  group: SettingGroup.LIST_CONFIG;
}

export interface RequestDebounceDelaySettingConfig extends NumberSettingConfig {
  name: SettingName.REQUEST_DEBOUNCE_DELAY;
  group: SettingGroup.MISC;
}

export type SettingsConfig = {
  [SettingName.PAGINATION_TYPE]: PaginationTypeSettingConfig;
  [SettingName.PAGINATION_PAGE_SIZE]: PaginationPageSizeSettingConfig;
  [SettingName.TAG_SUGGESTIONS]: TagSuggestionsSettingConfig;
  [SettingName.PUBLIC]: PublicSettingConfig;
  [SettingName.ASSIST_SAVE_IMAGE]: AssistSaveImageSettingConfig;
  [SettingName.DEFAULT_LIST_CONFIG]: DefaultListConfigSettingConfig;
  [SettingName.REQUEST_DEBOUNCE_DELAY]: RequestDebounceDelaySettingConfig;
};

export type SettingConfig = SettingsConfig[keyof SettingsConfig];

export const settingsConfig: SettingsConfig = {
  [SettingName.PAGINATION_TYPE]: {
    name: SettingName.PAGINATION_TYPE,
    control: {
      type: ControlType.SELECT,
      options: Object.values(PaginationType),
    },
    group: SettingGroup.PAGINATION,
    defaultValue: PaginationType.LAZY,
    context: [
      SettingContextType.USER,
      SettingContextType.LIST,
      SettingContextType.APP,
    ],
  },
  [SettingName.PAGINATION_PAGE_SIZE]: {
    name: SettingName.PAGINATION_PAGE_SIZE,
    control: { type: ControlType.NUMBER, min: 1, max: 100, step: 1 },
    group: SettingGroup.PAGINATION,
    defaultValue: 10,
    context: [
      SettingContextType.USER,
      SettingContextType.LIST,
      SettingContextType.APP,
    ],
  },
  [SettingName.TAG_SUGGESTIONS]: {
    name: SettingName.TAG_SUGGESTIONS,
    control: {
      type: ControlType.SELECT,
      options: Object.values(TagSuggestions),
    },
    group: SettingGroup.AUTO_COMPLETE,
    defaultValue: TagSuggestions.DISABLED,
    context: [
      SettingContextType.USER,
      SettingContextType.LIST,
      SettingContextType.APP,
    ],
  },
  [SettingName.PUBLIC]: {
    name: SettingName.PUBLIC,
    control: { type: ControlType.BOOLEAN },
    group: SettingGroup.ACCESS,
    defaultValue: false,
    context: [SettingContextType.LIST],
  },
  [SettingName.ASSIST_SAVE_IMAGE]: {
    name: SettingName.ASSIST_SAVE_IMAGE,
    control: { type: ControlType.BOOLEAN },
    group: SettingGroup.AI,
    defaultValue: false,
    context: [SettingContextType.USER, SettingContextType.APP],
  },
  [SettingName.DEFAULT_LIST_CONFIG]: {
    name: SettingName.DEFAULT_LIST_CONFIG,
    control: { type: ControlType.TEXT },
    group: SettingGroup.LIST_CONFIG,
    defaultValue: "",
    context: [SettingContextType.USER],
  },
  [SettingName.REQUEST_DEBOUNCE_DELAY]: {
    name: SettingName.REQUEST_DEBOUNCE_DELAY,
    control: { type: ControlType.NUMBER, min: 0, max: 1000, step: 1 },
    group: SettingGroup.MISC,
    defaultValue: 0,
    context: [
      SettingContextType.USER,
      SettingContextType.LIST,
      SettingContextType.APP,
    ],
  },
};

export type Setting = {
  [K in keyof SettingsConfig]: Partial<SettingsConfig[K]> & {
    name: K;
    value: SettingsConfig[K]["defaultValue"];
  };
}[keyof SettingsConfig];

export type Settings = {
  [Property in keyof SettingsConfig]: SettingsConfig[Property]["defaultValue"];
};

export const defaultSettings: Settings = Object.fromEntries(
  Object.entries(settingsConfig).map(([key, config]) => [
    key,
    config.defaultValue,
  ])
) as Settings;
