import { EntityConfig, EntityPropertyConfig } from "./Entity";
export declare enum RevisionDriftType {
    MIN_REQUIRED_INCREASED = "minRequiredIncreased",
    MAX_ALLOWED_DECREASED = "maxAllowedDecreased",
    INCOMPATIBLE_DATA_TYPE_CHANGE = "incompatibleDataTypeChange",
    NEW_PROPERTY_HAS_REQUIRED = "newPropertyHasRequired"
}
export type RevisionProblems = RevisionDriftType[];
export type RevisionCheckResult = {
    isValid: true;
} | {
    isValid: false;
    problems: RevisionProblems;
};
export type RevisionEntityPropertyConfig = Omit<EntityPropertyConfig, "userId" | "entityConfigId" | "id">;
export type RevisionEntityConfig = Pick<EntityConfig, "name" | "description"> & {
    properties: RevisionEntityPropertyConfig[];
};
