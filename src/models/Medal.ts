import { FactContext } from "./Fact";

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
  criteria: Criterion | Criteria;
}

export interface Medal {
  id: number;
  userId: string;
  medalConfigId: number;
  awardedAt: string;
}
