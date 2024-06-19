export enum OperationType {
  REPLACE_TAGS = "replaceTags",
  ADD_TAGS = "addTags",
  REMOVE_TAGS = "removeTags",
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

export type Operation =
  | ReplaceTagsOperation
  | AddTagsOperation
  | RemoveTagsOperation;

export interface BulkOperation {
  operation: Operation;
  actions: number[];
}
