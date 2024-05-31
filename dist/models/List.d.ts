export declare enum ListFilterType {
    CONTAINS_ONE_OF = "containsOneOf",
    CONTAINS_ALL_OF = "containsAllOf"
}
export declare enum ListFilterTimeType {
    ALL_TIME = "allTime",
    EXACT_DATE = "exactDate",
    RANGE = "range"
}
export interface AllTimeContext {
    type: ListFilterTimeType.ALL_TIME;
}
export interface ExactDateContext {
    type: ListFilterTimeType.EXACT_DATE;
    date: string;
}
export interface RangeContext {
    type: ListFilterTimeType.RANGE;
    start: string;
    end: string;
}
export type TimeContext = AllTimeContext | ExactDateContext | RangeContext;
export interface ListFilter {
    tagging: Record<ListFilterType, string[]>;
    includeUntagged: boolean;
    includeAll: boolean;
    time: TimeContext;
}
export declare enum ListSortProperty {
    OCCURRED_AT = "occurredAt",
    CREATED_AT = "createdAt"
}
export declare enum ListSortDirection {
    ASC = "asc",
    DESC = "desc"
}
export interface ListSort {
    property: ListSortProperty;
    direction: ListSortDirection;
}
export interface ListConfig {
    filter: ListFilter;
    sort: ListSort;
}
