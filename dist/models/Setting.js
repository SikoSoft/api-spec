export var ControlType;
(function (ControlType) {
    ControlType["BOOLEAN"] = "boolean";
    ControlType["NUMBER"] = "number";
    ControlType["TEXT"] = "text";
})(ControlType || (ControlType = {}));
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
        name: SettingName.PAGINATION_TYPE,
        value: PaginationType.LAZY,
        control: {
            type: ControlType.TEXT,
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
export const defaultSettings = {
    paginationType: PaginationType.LAZY,
    paginationPageSize: 10,
};
//# sourceMappingURL=Setting.js.map