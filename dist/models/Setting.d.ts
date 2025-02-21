export declare enum ControlType {
    BOOLEAN = "boolean",
    NUMBER = "number",
    TEXT = "text",
    SELECT = "select"
}
export declare enum SettingGroup {
    PAGINATION = "pagination"
}
export interface SettingTypeConfig {
    [ControlType.BOOLEAN]: boolean;
    [ControlType.NUMBER]: number;
    [ControlType.TEXT]: string;
    [ControlType.SELECT]: string;
}
export declare enum SettingName {
    PAGINATION_TYPE = "paginationType",
    PAGINATION_PAGE_SIZE = "paginationPageSize"
}
export declare enum PaginationType {
    LAZY = "lazy",
    NAVIGATION = "navigation"
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
export type Control = BooleanControl | NumberControl | TextControl | SelectControl;
export interface SettingConfig {
    name: SettingName;
    value: any;
    control: Control;
    group: SettingGroup;
}
export type SettingsConfig = {
    [SettingName.PAGINATION_TYPE]: SettingConfig;
    [SettingName.PAGINATION_PAGE_SIZE]: SettingConfig;
};
export declare const settingsConfig: SettingsConfig;
export type Setting = {
    [K in keyof SettingsConfig]: SettingsConfig[K];
}[keyof SettingsConfig];
export type Settings = {
    [Property in keyof SettingsConfig]: SettingsConfig[Property]["value"];
};
export declare const defaultSettings: Settings;
