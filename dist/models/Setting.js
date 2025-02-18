export var SettingType;
(function (SettingType) {
    SettingType["TOGGLE"] = "toggle";
    SettingType["NUMBER"] = "number";
    SettingType["TEXT"] = "text";
})(SettingType || (SettingType = {}));
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
export const defaultSettings = {
    paginationType: PaginationType.LAZY,
    paginationPageSize: 10,
};
//# sourceMappingURL=Setting.js.map