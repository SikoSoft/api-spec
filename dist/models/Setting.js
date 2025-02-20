export var SettingType;
(function (SettingType) {
    SettingType["BOOLEAN"] = "boolean";
    SettingType["NUMBER"] = "number";
    SettingType["TEXT"] = "text";
})(SettingType || (SettingType = {}));
export var SettingGroup;
(function (SettingGroup) {
    SettingGroup["PAGINATION"] = "pagination";
})(SettingGroup || (SettingGroup = {}));
export var SettingName;
(function (SettingName) {
    SettingName["PAGINATION_TYPE"] = "paginationType";
    SettingName["PAGINATION_PAGE_SIZE"] = "paginationPageSize";
})(SettingName || (SettingName = {}));
export var PaginationType;
(function (PaginationType) {
    PaginationType["LAZY"] = "lazy";
    PaginationType["NAVIGATION"] = "navigation";
})(PaginationType || (PaginationType = {}));
export const settingsConfig = {
    [SettingName.PAGINATION_TYPE]: {
        default: PaginationType.LAZY,
        control: SettingType.TEXT,
        group: SettingGroup.PAGINATION,
    },
    [SettingName.PAGINATION_PAGE_SIZE]: {
        default: 10,
        control: SettingType.NUMBER,
        group: SettingGroup.PAGINATION,
    },
};
export const defaultSettings = {
    paginationType: PaginationType.LAZY,
    paginationPageSize: 10,
};
//# sourceMappingURL=Setting.js.map