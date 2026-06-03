import { AnalysisClassificationType, FactContext, FactOperation } from "./Fact";
import { ListFilterTimeType } from "./List";

export enum Statistic {
  TOTAL_ENTITIES = "totalEntities",
}

export interface StatisticValue {}

export enum DataWindowType {
  YEAR_TO_DATE = "yearToDate",
  MONTH_TO_DATE = "monthToDate",
  WEEK_TO_DATE = "weekToDate",
  LAST_365_DAYS = "last365Days",
  LAST_30_DAYS = "last30Days",
  LAST_7_DAYS = "last7Days",
  CUSTOM = "custom",
}

export interface DataWindowCommon {
  type: DataWindowType;
}

export interface DataWindowCustom extends DataWindowCommon {
  type: DataWindowType.CUSTOM;
  start: Date;
  end: Date;
}

export type DataWindow =
  | (DataWindowCommon & {
      type: Exclude<DataWindowType, DataWindowType.CUSTOM>;
    })
  | DataWindowCustom;

export enum SegmentationType {
  TIME = "time",
}

export enum SegmentationTimeUnit {
  HOUR = "hour",
  DAY = "day",
  WEEK = "week",
  MONTH = "month",
  YEAR = "year",
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

export enum ChartVersion {
  V1 = 1,
}

export interface ChartConfigV1 {
  version: ChartVersion.V1;
  dataWindow: DataWindow;
  segmentation: Segmentation;
  dataPoints: DataPointRequest[];
}

export type ChartConfig = ChartConfigV1;

export interface Chart {
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

export const exampleChartRequest: ChartConfig = {
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

export interface ChartResponse {
  segmentedData: SegmentedDataPoint[];
}
