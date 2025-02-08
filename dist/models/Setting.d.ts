import { ListConfig } from "./List";
export declare enum SettingType {
    TOGGLE = "toggle",
    NUMBER = "number",
    TEXT = "text"
}
export interface Setting {
    name: string;
    type: SettingType;
}
export interface ToggleSetting extends Setting {
    value: boolean;
}
export interface NumberSetting extends Setting {
    value: number;
}
export interface TextSetting extends Setting {
    value: string;
}
export interface Settings {
    listConfig: ListConfig;
    settings: Setting[];
}
