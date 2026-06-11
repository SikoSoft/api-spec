import { ListFilter } from "./List";
export declare enum FactOperation {
    ENTITY_COUNT = "entityCount",
    UNIQUE_TAG_COUNT = "uniqueTagCount",
    MEDAL_COUNT = "medalCount",
    ANALYSIS_CLASSIFICATION = "analysisClassification",
    PROPERTY_SUM = "propertySum"
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
export type FactContext = EntityCountFactContext | UniqueTagCountFactContext | MedalCountFactContext | AnalysisClassificationFactContext | PropertySumFactContext;
