export declare enum ControlType {
    BOOLEAN = "boolean",
    NUMBER = "number",
    TEXT = "text",
    SELECT = "select"
}
export declare enum SettingGroup {
    ACCESS = "access",
    PAGINATION = "pagination",
    LEXICOLOGY = "lexicology",
    AUTO_COMPLETE = "autoComplete"
}
export interface SettingTypeConfig {
    [ControlType.BOOLEAN]: boolean;
    [ControlType.NUMBER]: number;
    [ControlType.TEXT]: string;
    [ControlType.SELECT]: string;
}
export declare enum SettingName {
    PAGINATION_TYPE = "paginationType",
    PAGINATION_PAGE_SIZE = "paginationPageSize",
    TAG_SUGGESTIONS = "tagSuggestions",
    PUBLIC = "public"
}
export declare enum PaginationType {
    LAZY = "lazy",
    NAVIGATION = "navigation",
    MORE_BUTTON = "moreButton"
}
export declare enum TagSuggestions {
    DISABLED = "disabled",
    ONLY_IN_LIST = "onlyInList",
    ALL = "all"
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
export type Control = BooleanControl | NumberControl | TextControl | SelectControl;
export interface CommonSettingConfig {
    name: SettingName;
    control: Control;
    group: SettingGroup;
    defaultValue: SettingTypeConfig[ControlType];
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
export type SettingsConfig = {
    [SettingName.PAGINATION_TYPE]: PaginationTypeSettingConfig;
    [SettingName.PAGINATION_PAGE_SIZE]: PaginationPageSizeSettingConfig;
    [SettingName.TAG_SUGGESTIONS]: TagSuggestionsSettingConfig;
    [SettingName.PUBLIC]: PublicSettingConfig;
};
export type SettingConfig = SettingsConfig[keyof SettingsConfig];
export declare const settingsConfig: SettingsConfig;
export type Setting = {
    [K in keyof SettingsConfig]: Partial<SettingsConfig[K]> & {
        name: K;
        value: SettingsConfig[K]["defaultValue"];
    };
}[keyof SettingsConfig];
export type Settings = {
    [Property in keyof SettingsConfig]: SettingsConfig[Property]["defaultValue"];
};
export declare const defaultSettings: Settings;
