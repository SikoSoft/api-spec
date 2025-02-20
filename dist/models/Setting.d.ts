export declare enum SettingType {
    BOOLEAN = "boolean",
    NUMBER = "number",
    TEXT = "text"
}
export declare enum SettingGroup {
    PAGINATION = "pagination"
}
export interface SettingTypeConfig {
    [SettingType.BOOLEAN]: boolean;
    [SettingType.NUMBER]: number;
    [SettingType.TEXT]: string;
}
export declare enum SettingName {
    PAGINATION_TYPE = "paginationType",
    PAGINATION_PAGE_SIZE = "paginationPageSize"
}
export declare enum PaginationType {
    LAZY = "lazy",
    NAVIGATION = "navigation"
}
export interface SettingConfig {
    valueType: any;
    controlType: SettingType;
}
export type PaginationIndex = keyof typeof PaginationType;
export type PaginationValue = (typeof PaginationType)[PaginationIndex];
export type SettingsConfig = {
    [SettingName.PAGINATION_TYPE]: {
        default: PaginationType;
        control: SettingType.TEXT;
        group: SettingGroup.PAGINATION;
    };
    [SettingName.PAGINATION_PAGE_SIZE]: {
        default: number;
        control: SettingType.NUMBER;
        group: SettingGroup.PAGINATION;
    };
};
export declare const settingsConfig: SettingsConfig;
export type Setting = {
    [K in keyof SettingsConfig]: {
        name: K;
        value: SettingsConfig[K]["default"];
    };
}[keyof SettingsConfig];
export type Settings = {
    [Property in keyof SettingsConfig]: SettingsConfig[Property]["default"];
};
export declare const defaultSettings: Settings;
