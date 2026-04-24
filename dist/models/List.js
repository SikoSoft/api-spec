export var ListFilterType;
(function (ListFilterType) {
    ListFilterType["CONTAINS_ONE_OF"] = "containsOneOf";
    ListFilterType["CONTAINS_ALL_OF"] = "containsAllOf";
})(ListFilterType || (ListFilterType = {}));
export var ListFilterTimeType;
(function (ListFilterTimeType) {
    ListFilterTimeType["ALL_TIME"] = "allTime";
    ListFilterTimeType["EXACT_DATE"] = "exactDate";
    ListFilterTimeType["RANGE"] = "range";
})(ListFilterTimeType || (ListFilterTimeType = {}));
export var TextType;
(function (TextType) {
    TextType["CONTAINS"] = "contains";
    TextType["STARTS_WITH"] = "startsWith";
    TextType["ENDS_WITH"] = "endsWith";
    TextType["EQUALS"] = "equals";
})(TextType || (TextType = {}));
export const defaultListFilter = {
    tagging: {
        [ListFilterType.CONTAINS_ALL_OF]: [],
        [ListFilterType.CONTAINS_ONE_OF]: [],
    },
    includeTypes: [],
    includeUntagged: true,
    includeAll: true,
    includeAllTagging: true,
    time: { type: ListFilterTimeType.ALL_TIME },
    properties: [],
};
export var ListSortNativeProperty;
(function (ListSortNativeProperty) {
    ListSortNativeProperty["CREATED_AT"] = "createdAt";
    ListSortNativeProperty["UPDATED_AT"] = "updatedAt";
})(ListSortNativeProperty || (ListSortNativeProperty = {}));
export var ListSortDirection;
(function (ListSortDirection) {
    ListSortDirection["ASC"] = "asc";
    ListSortDirection["DESC"] = "desc";
})(ListSortDirection || (ListSortDirection = {}));
export const defaultListSort = {
    property: ListSortNativeProperty.CREATED_AT,
    direction: ListSortDirection.DESC,
};
export var ListContextType;
(function (ListContextType) {
    ListContextType["BEFORE"] = "before";
    ListContextType["AFTER"] = "after";
})(ListContextType || (ListContextType = {}));
export var ListContextUnit;
(function (ListContextUnit) {
    ListContextUnit["MINUTE"] = "minute";
    ListContextUnit["HOUR"] = "hour";
    ListContextUnit["DAY"] = "day";
})(ListContextUnit || (ListContextUnit = {}));
export const defaultListContext = {
    type: ListContextType.BEFORE,
    quantity: 1,
    unit: ListContextUnit.DAY,
};
//# sourceMappingURL=List.js.map