import { AnalysisClassificationType, FactContext, FactOperation } from "./Fact";
import { ListFilterTimeType } from "./List";

export enum Statistic {
  TOTAL_ENTITIES = "totalEntities",
}

export interface StatisticValue {}

export interface DataWindow {
  start: Date;
  end: Date;
}

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

export type SegmentedDataPoint = {
  value: number | string | null;
};

export type SegmentedData = Record<string, SegmentedDataPoint>;

export interface ChartRequest {
  dataWindow: DataWindow;
  segmentation: Segmentation;
  dataPoints: DataPointRequest[];
}

export const exampleChartRequest: ChartRequest = {
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
  segmentedData: SegmentedData;
}
