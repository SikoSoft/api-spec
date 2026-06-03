import { AnalysisClassificationType, FactOperation } from "./Fact";
import { ListFilterTimeType } from "./List";
export var Statistic;
(function (Statistic) {
    Statistic["TOTAL_ENTITIES"] = "totalEntities";
})(Statistic || (Statistic = {}));
export var DataWindowType;
(function (DataWindowType) {
    DataWindowType["YEAR_TO_DATE"] = "yearToDate";
    DataWindowType["MONTH_TO_DATE"] = "monthToDate";
    DataWindowType["WEEK_TO_DATE"] = "weekToDate";
    DataWindowType["LAST_365_DAYS"] = "last365Days";
    DataWindowType["LAST_30_DAYS"] = "last30Days";
    DataWindowType["LAST_7_DAYS"] = "last7Days";
    DataWindowType["CUSTOM"] = "custom";
})(DataWindowType || (DataWindowType = {}));
export var SegmentationType;
(function (SegmentationType) {
    SegmentationType["TIME"] = "time";
})(SegmentationType || (SegmentationType = {}));
export var SegmentationTimeUnit;
(function (SegmentationTimeUnit) {
    SegmentationTimeUnit["HOUR"] = "hour";
    SegmentationTimeUnit["DAY"] = "day";
    SegmentationTimeUnit["WEEK"] = "week";
    SegmentationTimeUnit["MONTH"] = "month";
    SegmentationTimeUnit["YEAR"] = "year";
})(SegmentationTimeUnit || (SegmentationTimeUnit = {}));
export var ChartVersion;
(function (ChartVersion) {
    ChartVersion[ChartVersion["V1"] = 1] = "V1";
})(ChartVersion || (ChartVersion = {}));
export const exampleChartRequest = {
    version: ChartVersion.V1,
    dataWindow: {
        type: DataWindowType.CUSTOM,
        start: new Date("2024-01-01T00:00:00Z"),
        end: new Date("2024-12-31T23:59:59Z"),
    },
    segmentation: {
        type: SegmentationType.TIME,
        unit: SegmentationTimeUnit.MONTH,
    },
    dataPoints: [
        {
            operation: FactOperation.ANALYSIS_CLASSIFICATION,
            analysisType: AnalysisClassificationType.MORNING_FASTING,
            filter: {
                includeAll: true,
                includeAllTagging: true,
                published: true,
                suggested: false,
                identified: false,
                time: { type: ListFilterTimeType.ALL_TIME },
                properties: [],
            },
        },
    ],
};
//# sourceMappingURL=Statistic.js.map