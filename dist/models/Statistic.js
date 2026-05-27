import { FactOperation } from "./Fact";
import { ListFilterTimeType } from "./List";
export var Statistic;
(function (Statistic) {
    Statistic["TOTAL_ENTITIES"] = "totalEntities";
})(Statistic || (Statistic = {}));
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
export const exampleChartRequest = {
    dataWindow: {
        start: new Date("2024-01-01T00:00:00Z"),
        end: new Date("2024-12-31T23:59:59Z"),
    },
    segmentation: {
        type: SegmentationType.TIME,
        unit: SegmentationTimeUnit.MONTH,
    },
    dataPoints: [
        {
            operation: FactOperation.ENTITY_COUNT,
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