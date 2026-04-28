export var ControlType;
(function (ControlType) {
    ControlType["BOOLEAN"] = "boolean";
    ControlType["NUMBER"] = "number";
    ControlType["TEXT"] = "text";
    ControlType["SELECT"] = "select";
})(ControlType || (ControlType = {}));
export var SettingGroup;
(function (SettingGroup) {
    SettingGroup["ACCESS"] = "access";
    SettingGroup["PAGINATION"] = "pagination";
    SettingGroup["LEXICOLOGY"] = "lexicology";
    SettingGroup["AUTO_COMPLETE"] = "autoComplete";
})(SettingGroup || (SettingGroup = {}));
export var SettingName;
(function (SettingName) {
    SettingName["PAGINATION_TYPE"] = "paginationType";
    SettingName["PAGINATION_PAGE_SIZE"] = "paginationPageSize";
    SettingName["TAG_SUGGESTIONS"] = "tagSuggestions";
    SettingName["PUBLIC"] = "public";
})(SettingName || (SettingName = {}));
export var PaginationType;
(function (PaginationType) {
    PaginationType["LAZY"] = "lazy";
    PaginationType["NAVIGATION"] = "navigation";
    PaginationType["MORE_BUTTON"] = "moreButton";
})(PaginationType || (PaginationType = {}));
export var TagSuggestions;
(function (TagSuggestions) {
    TagSuggestions["DISABLED"] = "disabled";
    TagSuggestions["ONLY_IN_LIST"] = "onlyInList";
    TagSuggestions["ALL"] = "all";
})(TagSuggestions || (TagSuggestions = {}));
export const settingsConfig = {
    [SettingName.PAGINATION_TYPE]: {
        name: SettingName.PAGINATION_TYPE,
        control: {
            type: ControlType.SELECT,
            options: Object.values(PaginationType),
        },
        group: SettingGroup.PAGINATION,
        defaultValue: PaginationType.LAZY,
    },
    [SettingName.PAGINATION_PAGE_SIZE]: {
        name: SettingName.PAGINATION_PAGE_SIZE,
        control: { type: ControlType.NUMBER, min: 1, max: 100, step: 1 },
        group: SettingGroup.PAGINATION,
        defaultValue: 10,
    },
    [SettingName.TAG_SUGGESTIONS]: {
        name: SettingName.TAG_SUGGESTIONS,
        control: {
            type: ControlType.SELECT,
            options: Object.values(TagSuggestions),
        },
        group: SettingGroup.AUTO_COMPLETE,
        defaultValue: TagSuggestions.DISABLED,
    },
    [SettingName.PUBLIC]: {
        name: SettingName.PUBLIC,
        control: { type: ControlType.BOOLEAN },
        group: SettingGroup.ACCESS,
        defaultValue: false,
    },
};
export const defaultSettings = Object.fromEntries(Object.entries(settingsConfig).map(([key, config]) => [
    key,
    config.defaultValue,
]));
//# sourceMappingURL=Setting.js.map