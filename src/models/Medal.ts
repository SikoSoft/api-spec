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
  criteria: Criterion | Criteria;
}

export interface Medal {
  id: number;
  userId: string;
  medalConfigId: number;
  awardedAt: string;
}
