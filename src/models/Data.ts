import { Entity, EntityConfig, EntityPropertyConfig } from "./Entity";
import { ListConfig } from "./List";

export type ExportMetaData = {
  version: string;
  date: string;
};

export interface ExportPropertyConfig
  extends Omit<EntityPropertyConfig, "userId" | "entityConfigId"> {}

export interface ExportEntityConfig
  extends Omit<EntityConfig, "userId" | "properties"> {
  properties: ExportPropertyConfig[];
}

export type ExportEntityConfigData = ExportEntityConfig[];

export type ExportEntityData = Omit<Entity, "userId">[];

export type ExportListConfigData = ListConfig[];

export enum ExportDataType {
  ENTITY_CONFIGS = "entityConfigs",
  ENTITIES = "entities",
  LIST_CONFIGS = "listConfigs",
}

export type ExportDataContents = {
  meta: ExportMetaData;
  [ExportDataType.ENTITY_CONFIGS]: ExportEntityConfigData;
  [ExportDataType.ENTITIES]: ExportEntityData;
  [ExportDataType.LIST_CONFIGS]: ExportListConfigData;
};

export type ExportDataSet = {
  entityConfigId: number;
  dataType: ExportDataType;
};

export enum NukedDataType {
  ENTITIES = "entities",
  ENTITY_CONFIGS = "entityConfigs",
  LIST_CONFIGS = "listConfigs",
}
