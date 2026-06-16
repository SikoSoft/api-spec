import { ListFilter } from "./List";
import { EvalOperator } from "./Medal";
import { SegmentationTimeUnit } from "./Statistic";

export enum FactOperation {
  ENTITY_COUNT = "entityCount",
  UNIQUE_TAG_COUNT = "uniqueTagCount",
  MEDAL_COUNT = "medalCount",
  ANALYSIS_CLASSIFICATION = "analysisClassification",
  PROPERTY_SUM = "propertySum",
}

export enum AnalysisClassificationType {
  MORNING_FASTING = "morningFasting",
  AFTERNOON_SNACKING = "afternoonSnacking",
  CAFFEINE_INTAKE = "caffeineIntake",
}

export interface AnalysisClassificationConfig {
  type: AnalysisClassificationType;
  prompt: string;
}

export const analysisClassifications: AnalysisClassificationConfig[] = [
  {
    type: AnalysisClassificationType.MORNING_FASTING,
    prompt:
      "Classify the user's morning fasting behavior based on their activity patterns.",
  },
  {
    type: AnalysisClassificationType.AFTERNOON_SNACKING,
    prompt:
      "Classify the user's afternoon snacking behavior based on their activity patterns.",
  },
  {
    type: AnalysisClassificationType.CAFFEINE_INTAKE,
    prompt:
      "Classify the user's caffeine intake behavior based on their activity patterns.",
  },
];

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
  start?: string;
  end?: string;
};

export type AnalysisClassificationFactContext = {
  operation: FactOperation.ANALYSIS_CLASSIFICATION;
  filter: ListFilter;
  analysisType: AnalysisClassificationType;
};

export type PropertySumFactContext = {
  operation: FactOperation.PROPERTY_SUM;
  filter: ListFilter;
  propertyConfigId: number;
};

export type FactContext =
  | EntityCountFactContext
  | UniqueTagCountFactContext
  | MedalCountFactContext
  | AnalysisClassificationFactContext
  | PropertySumFactContext;

export interface Fact {
  id: number;
  name: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  context: FactContext;
}

export interface FactResult {
  factId: number;
  value: string | number;
}

export interface FactRequest {
  alias: string;
  context: FactContext;
}

export interface StreakContext {
  segmentUnit: SegmentationTimeUnit;
  length: number;
  innerContext: FactContext;
  innerOperator: EvalOperator;
  innerValue: string | number | boolean;
}

export interface Streak {
  id: number;
  name: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  context: StreakContext;
}

export interface StreakResult {
  streakId: number;
  current: number;
  longest: number;
}

export interface StreakRequest {
  alias: string;
  context: StreakContext;
}
