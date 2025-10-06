import { EntityConfig, EntityPropertyConfig } from "../models/Entity";
import { RevisionProblems, RevisionCheckResult } from "../models/Revision";
export declare class Revision {
    static getResult(problems: RevisionProblems): RevisionCheckResult;
    static propertiesAreSafe(before: EntityPropertyConfig[], after: EntityPropertyConfig[]): RevisionCheckResult;
    static getAddedProperties(before: EntityPropertyConfig[], after: EntityPropertyConfig[]): EntityPropertyConfig[];
    static getRemovedProperties(before: EntityPropertyConfig[], after: EntityPropertyConfig[]): EntityPropertyConfig[];
    static propertyIsSafe(before: EntityPropertyConfig, after: EntityPropertyConfig): RevisionCheckResult;
    static getRequiredPropertyInstances(property: EntityPropertyConfig): number;
    static getAllowedPropertyInstances(property: EntityPropertyConfig): number;
    static getEntityConfigAsString(entityConfig: EntityConfig): string;
    static getPropertyConfigAsString(propertyConfig: EntityPropertyConfig): string;
}
