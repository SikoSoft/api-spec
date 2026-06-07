import { FactContext } from "./Fact";
import { SegmentationTimeUnit } from "./Statistic";
export interface StreakRequest {
    alias: string;
    segmentUnit: SegmentationTimeUnit;
    length: number;
    innerContext: FactContext;
    innerOperator: EvalOperator;
    innerValue: string | number | boolean;
}
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
    streakRequests: StreakRequest[];
    criteria: Criterion | Criteria;
}
export interface Medal {
    id: number;
    userId: string;
    medalConfigId: number;
    awardedAt: string;
}
