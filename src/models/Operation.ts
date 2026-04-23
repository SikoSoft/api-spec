import { EntityProperty } from "./Entity";

export enum OperationType {
  DELETE = "delete",
  REPLACE_TAGS = "replaceTags",
  ADD_TAGS = "addTags",
  REMOVE_TAGS = "removeTags",
  REPLACE_PROPERTIES = "replaceProperties",
  ADD_PROPERTIES = "addProperties",
  REMOVE_PROPERTIES = "removeProperties",
}

export interface DeleteOperation {
  type: OperationType.DELETE;
}

export interface ReplaceTagsOperation {
  type: OperationType.REPLACE_TAGS;
  tags: string[];
}

export interface AddTagsOperation {
  type: OperationType.ADD_TAGS;
  tags: string[];
}

export interface RemoveTagsOperation {
  type: OperationType.REMOVE_TAGS;
  tags: string[];
}

export interface ReplacePropertiesOperation {
  type: OperationType.REPLACE_PROPERTIES;
  properties: EntityProperty[];
}

export interface AddPropertiesOperation {
  type: OperationType.ADD_PROPERTIES;
  properties: EntityProperty[];
}

export interface RemovePropertiesOperation {
  type: OperationType.REMOVE_PROPERTIES;
  properties: EntityProperty[];
}

export type Operation =
  | DeleteOperation
  | ReplaceTagsOperation
  | AddTagsOperation
  | RemoveTagsOperation
  | ReplacePropertiesOperation
  | AddPropertiesOperation
  | RemovePropertiesOperation;

export interface BulkOperation {
  operation: Operation;
  entities: number[];
}
