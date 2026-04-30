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
    SettingGroup["LIST_CONFIG"] = "listConfig";
    SettingGroup["AI"] = "ai";
    SettingGroup["MISC"] = "misc";
})(SettingGroup || (SettingGroup = {}));
export var SettingName;
(function (SettingName) {
    SettingName["PAGINATION_TYPE"] = "paginationType";
    SettingName["PAGINATION_PAGE_SIZE"] = "paginationPageSize";
    SettingName["TAG_SUGGESTIONS"] = "tagSuggestions";
    SettingName["PUBLIC"] = "public";
    SettingName["ASSIST_SAVE_IMAGE"] = "assistSaveImage";
    SettingName["DEFAULT_LIST_CONFIG"] = "defaultListConfig";
    SettingName["REQUEST_DEBOUNCE_DELAY"] = "requestDebounceDelay";
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
export var SettingContextType;
(function (SettingContextType) {
    SettingContextType["LIST"] = "list";
    SettingContextType["USER"] = "user";
    SettingContextType["APP"] = "app";
})(SettingContextType || (SettingContextType = {}));
export const settingsConfig = {
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
        context: [SettingContextType.USER],
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
export const defaultSettings = Object.fromEntries(Object.entries(settingsConfig).map(([key, config]) => [
    key,
    config.defaultValue,
]));
//# sourceMappingURL=Setting.js.map