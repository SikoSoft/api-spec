import { ListFilter } from "./List";
export type EvalOperator = "==" | "!=" | ">" | ">=" | "<" | "<=" | "contains";
export interface Criterion {
    fact: string;
    operator: EvalOperator;
    value: string | number | boolean | string[];
}
export interface Criteria {
    any?: (Criterion | Criteria)[];
    all?: (Criterion | Criteria)[];
}
export declare enum FactOperation {
    ENTITY_COUNT = "entityCount",
    UNIQUE_TAG_COUNT = "uniqueTagCount",
    MEDAL_COUNT = "medalCount"
}
export type EntityCountFactContext = {
    operation: FactOperation.ENTITY_COUNT;
    filter: ListFilter;
};
export type UniqueTagCountFactContext = {
    operation: FactOperation.UNIQUE_TAG_COUNT;
    filter: ListFilter;
};
export type MedalCountFactContext = {
    operation: FactOperation.MEDAL_COUNT;
    medalConfigId: number;
    series: string;
};
export type FactContext = EntityCountFactContext | UniqueTagCountFactContext | MedalCountFactContext;
export interface FactRequest {
    alias: string;
    context: FactContext;
}
export interface MedalConfig {
    id: number;
    name: string;
    description: string;
    series: string;
    recurrence: number;
    prestige: number;
    icon: string;
    createdAt: string;
    updatedAt: string;
    factRequests: FactRequest[];
    criteria: Criterion | Criteria;
}
export interface Medal {
    id: number;
    userId: string;
    medalConfigId: number;
    awardedAt: string;
}
