import { AccessPolicy } from "./Access";
import { DataType, PropertyDataValue } from "./Entity";
import { Settings } from "./Setting";
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
export declare enum TextType {
    CONTAINS = "contains",
    STARTS_WITH = "startsWith",
    ENDS_WITH = "endsWith",
    EQUALS = "equals"
}
export interface TextContext {
    type: TextType;
    subStr: string;
}
export type TaggingContext = Record<ListFilterType, string[]>;
export interface FilterProperty {
    propertyId: number;
    value: PropertyDataValue;
}
export interface ListFilter {
    tagging: TaggingContext;
    includeUntagged: boolean;
    includeAll: boolean;
    includeAllTagging: boolean;
    includeTypes: number[];
    time: TimeContext;
    properties: FilterProperty[];
}
export declare const defaultListFilter: ListFilter;
export declare enum ListSortNativeProperty {
    CREATED_AT = "createdAt",
    UPDATED_AT = "updatedAt"
}
export interface ListSortCustomProperty {
    dataType: DataType;
    propertyId: number;
}
export type ListSortProperty = ListSortNativeProperty | ListSortCustomProperty;
export declare enum ListSortDirection {
    ASC = "asc",
    DESC = "desc"
}
export interface ListSort {
    property: ListSortProperty;
    direction: ListSortDirection;
}
export declare const defaultListSort: ListSort;
export interface ListConfig {
    userId: string;
    name: string;
    id: string;
    filter: ListFilter;
    sort: ListSort;
    setting: Settings;
    themes: string[];
    viewAccessPolicy: AccessPolicy | null;
    editAccessPolicy: AccessPolicy | null;
}
export declare enum ListContextType {
    BEFORE = "before",
    AFTER = "after"
}
export declare enum ListContextUnit {
    MINUTE = "minute",
    HOUR = "hour",
    DAY = "day"
}
export interface ListContext {
    type: ListContextType;
    quantity: number;
    unit: ListContextUnit;
}
export declare const defaultListContext: ListContext;
