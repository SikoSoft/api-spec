import { FactContext } from "./Fact";
export declare enum Statistic {
    TOTAL_ENTITIES = "totalEntities"
}
export interface StatisticValue {
}
export declare enum DataWindowType {
    YEAR_TO_DATE = "yearToDate",
    MONTH_TO_DATE = "monthToDate",
    WEEK_TO_DATE = "weekToDate",
    LAST_365_DAYS = "last365Days",
    LAST_30_DAYS = "last30Days",
    LAST_7_DAYS = "last7Days",
    CUSTOM = "custom"
}
export interface DataWindowCommon {
    type: DataWindowType;
}
export interface DataWindowCustom extends DataWindowCommon {
    type: DataWindowType.CUSTOM;
    start: Date;
    end: Date;
}
export type DataWindow = (DataWindowCommon & {
    type: Exclude<DataWindowType, DataWindowType.CUSTOM>;
}) | DataWindowCustom;
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
export type SegmentedDataPointValue = {
    value: number | string | null;
};
export type SegmentedDataPoint = {
    segment: string;
    value: SegmentedDataPointValue;
};
export declare enum ChartVersion {
    V1 = 1
}
export interface ChartConfigV1 {
    version: ChartVersion.V1;
    dataWindow: DataWindow;
    segmentation: Segmentation;
    dataPoints: DataPointRequest[];
}
export type ChartConfig = ChartConfigV1;
export interface Chart {
    id: number;
    name: string;
    config: ChartConfig;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface ChartRequest {
    config: ChartConfig;
    name?: string;
    save?: boolean;
}
export declare const exampleChartRequest: ChartConfig;
export interface ChartResponse {
    segmentedData: SegmentedDataPoint[];
}
