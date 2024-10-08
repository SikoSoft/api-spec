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
})(TextType || (TextType = {}));
export var ListSortProperty;
(function (ListSortProperty) {
    ListSortProperty["OCCURRED_AT"] = "occurredAt";
    ListSortProperty["CREATED_AT"] = "createdAt";
    ListSortProperty["DESC"] = "desc";
})(ListSortProperty || (ListSortProperty = {}));
export var ListSortDirection;
(function (ListSortDirection) {
    ListSortDirection["ASC"] = "asc";
    ListSortDirection["DESC"] = "desc";
})(ListSortDirection || (ListSortDirection = {}));
//# sourceMappingURL=List.js.map