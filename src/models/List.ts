import { Settings } from "./Setting";

export enum ListFilterType {
  CONTAINS_ONE_OF = "containsOneOf",
  CONTAINS_ALL_OF = "containsAllOf",
}

export enum ListFilterTimeType {
  ALL_TIME = "allTime",
  EXACT_DATE = "exactDate",
  RANGE = "range",
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

export enum TextType {
  CONTAINS = "contains",
  STARTS_WITH = "startsWith",
  ENDS_WITH = "endsWith",
  EQUALS = "equals",
}

export interface TextContext {
  type: TextType;
  subStr: string;
}

export type TaggingContext = Record<ListFilterType, string[]>;

export interface ListFilter {
  tagging: TaggingContext;
  includeUntagged: boolean;
  includeAll: boolean;
  includeAllTagging: boolean;
  time: TimeContext;
  text: TextContext[];
}

export enum ListSortProperty {
  OCCURRED_AT = "occurredAt",
  CREATED_AT = "createdAt",
  DESC = "desc",
}

export enum ListSortDirection {
  ASC = "asc",
  DESC = "desc",
}

export interface ListSort {
  property: ListSortProperty;
  direction: ListSortDirection;
}

export interface ListConfig {
  name: string;
  id: string;
  filter: ListFilter;
  sort: ListSort;
  setting: Settings;
}

export enum ListContextType {
  BEFORE = "before",
  AFTER = "after",
}

export enum ListContextUnit {
  MINUTE = "minute",
  HOUR = "hour",
  DAY = "day",
}

export interface ListContext {
  type: ListContextType;
  quantity: number;
  unit: ListContextUnit;
}
