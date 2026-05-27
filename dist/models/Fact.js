export var FactOperation;
(function (FactOperation) {
    FactOperation["ENTITY_COUNT"] = "entityCount";
    FactOperation["UNIQUE_TAG_COUNT"] = "uniqueTagCount";
    FactOperation["MEDAL_COUNT"] = "medalCount";
    FactOperation["ANALYSIS_CLASSIFICATION"] = "analysisClassification";
})(FactOperation || (FactOperation = {}));
export var AnalysisClassificationType;
(function (AnalysisClassificationType) {
    AnalysisClassificationType["MORNING_FASTING"] = "morningFasting";
    AnalysisClassificationType["AFTERNOON_SNACKING"] = "afternoonSnacking";
    AnalysisClassificationType["CAFFEINE_INTAKE"] = "caffeineIntake";
})(AnalysisClassificationType || (AnalysisClassificationType = {}));
export const analysisClassifications = [
    {
        type: AnalysisClassificationType.MORNING_FASTING,
        prompt: "Classify the user's morning fasting behavior based on their activity patterns.",
    },
    {
        type: AnalysisClassificationType.AFTERNOON_SNACKING,
        prompt: "Classify the user's afternoon snacking behavior based on their activity patterns.",
    },
    {
        type: AnalysisClassificationType.CAFFEINE_INTAKE,
        prompt: "Classify the user's caffeine intake behavior based on their activity patterns.",
    },
];
//# sourceMappingURL=Fact.js.map