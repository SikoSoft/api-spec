import configData from "./data/analysisConfig.json";
export var FactOperation;
(function (FactOperation) {
    FactOperation["ENTITY_COUNT"] = "entityCount";
    FactOperation["UNIQUE_TAG_COUNT"] = "uniqueTagCount";
    FactOperation["MEDAL_COUNT"] = "medalCount";
    FactOperation["ANALYSIS_CLASSIFICATION"] = "analysisClassification";
    FactOperation["PROPERTY_SUM"] = "propertySum";
})(FactOperation || (FactOperation = {}));
export var AnalysisClassificationType;
(function (AnalysisClassificationType) {
    AnalysisClassificationType["MORNING_FASTING"] = "morningFasting";
    AnalysisClassificationType["AFTERNOON_SNACKING"] = "afternoonSnacking";
    AnalysisClassificationType["CAFFEINE_INTAKE"] = "caffeineIntake";
    AnalysisClassificationType["SUGAR_INTAKE"] = "sugarIntake";
    AnalysisClassificationType["CALORIE_INTAKE"] = "calorieIntake";
})(AnalysisClassificationType || (AnalysisClassificationType = {}));
export const analysisClassifications = configData;
//# sourceMappingURL=Fact.js.map