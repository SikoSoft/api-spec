import { FactContext } from "./Fact";
export declare enum Statistic {
    TOTAL_ENTITIES = "totalEntities"
}
export interface StatisticValue {
}
export interface DataWindow {
    start: Date;
    end: Date;
}
export declare enum SegmentationType {
    TIME = "time"
}
export declare enum SegmentationTimeUnit {
    HOUR = "hour",
    DAY = "day",
    WEEK = "week",
    MONTH = "month",
    YEAR = "year"
}
export type DataPointRequest = FactContext;
export interface SegmentationTime {
    type: SegmentationType.TIME;
    unit: SegmentationTimeUnit;
}
export type Segmentation = SegmentationTime;
export interface ChartRequest {
    dataWindow: DataWindow;
    segmentation: Segmentation;
    dataPoints: DataPointRequest[];
}
export declare const exampleChartRequest: ChartRequest;
