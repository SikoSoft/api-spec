export var ControlType;
(function (ControlType) {
    ControlType["BOOLEAN"] = "boolean";
    ControlType["NUMBER"] = "number";
    ControlType["TEXT"] = "text";
    ControlType["SELECT"] = "select";
})(ControlType || (ControlType = {}));
export var SettingGroup;
(function (SettingGroup) {
    SettingGroup["PAGINATION"] = "pagination";
    SettingGroup["LEXICOLOGY"] = "lexicology";
})(SettingGroup || (SettingGroup = {}));
export var SettingName;
(function (SettingName) {
    SettingName["PAGINATION_TYPE"] = "paginationType";
    SettingName["PAGINATION_PAGE_SIZE"] = "paginationPageSize";
    SettingName["ENTITY_NAME"] = "entityName";
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
            type: ControlType.SELECT,
            options: [PaginationType.LAZY, PaginationType.NAVIGATION],
        },
        group: SettingGroup.PAGINATION,
    },
    [SettingName.PAGINATION_PAGE_SIZE]: {
        name: SettingName.PAGINATION_PAGE_SIZE,
        value: 10,
        control: { type: ControlType.NUMBER, min: 1, max: 100, step: 1 },
        group: SettingGroup.PAGINATION,
    },
    [SettingName.ENTITY_NAME]: {
        name: SettingName.ENTITY_NAME,
        value: "action",
        control: { type: ControlType.TEXT },
        group: SettingGroup.LEXICOLOGY,
    },
};
export const defaultSettings = {
    [SettingName.PAGINATION_TYPE]: PaginationType.LAZY,
    [SettingName.PAGINATION_PAGE_SIZE]: 10,
    [SettingName.ENTITY_NAME]: "action",
};
//# sourceMappingURL=Setting.js.map