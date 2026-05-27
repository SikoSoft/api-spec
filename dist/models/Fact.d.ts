import { ListFilter } from "./List";
export declare enum FactOperation {
    ENTITY_COUNT = "entityCount",
    UNIQUE_TAG_COUNT = "uniqueTagCount",
    MEDAL_COUNT = "medalCount",
    SEGMENT_CLASSIFICATION = "segmentClassification"
}
export declare enum AnalysisClassificationType {
    MORNING_FASTING = "morningFasting",
    AFTERNOON_SNACKING = "afternoonSnacking",
    CAFFEINE_INTAKE = "caffeineIntake"
}
export interface AnalysisClassificationConfig {
    type: AnalysisClassificationType;
    prompt: string;
}
export declare const analysisClassifications: AnalysisClassificationConfig[];
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
export type AnalysisClassificationFactContext = {
    operation: FactOperation.SEGMENT_CLASSIFICATION;
    filter: ListFilter;
    analysisType: AnalysisClassificationType;
};
export type FactContext = EntityCountFactContext | UniqueTagCountFactContext | MedalCountFactContext | AnalysisClassificationFactContext;
