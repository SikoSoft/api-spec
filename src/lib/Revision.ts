import { DataType, EntityConfig, EntityPropertyConfig } from "../models/Entity";
import {
  RevisionProblems,
  RevisionCheckResult,
  RevisionDriftType,
  RevisionEntityConfig,
  RevisionEntityPropertyConfig,
} from "../models/Revision";

export class Revision {
  static getResult(problems: RevisionProblems): RevisionCheckResult {
    if (problems.length > 0) {
      return {
        isValid: false,
        problems,
      };
    }

    return {
      isValid: true,
    };
  }

  static propertiesAreSafe(
    before: EntityPropertyConfig[],
    after: EntityPropertyConfig[]
  ): RevisionCheckResult {
    const problems: RevisionProblems = [];

    const addedProperties = Revision.getAddedProperties(before, after);
    const newPropertyHasRequired = addedProperties.some(
      (addedProperty) => addedProperty.required > 0
    );
    if (newPropertyHasRequired) {
      problems.push(RevisionDriftType.NEW_PROPERTY_HAS_REQUIRED);
    }

    for (const afterProperty of after) {
      const beforeProperty = before.find(
        (property) => afterProperty.id === property.id
      );
      if (!beforeProperty) {
        continue;
      }

      const propertyResult = Revision.propertyIsSafe(
        beforeProperty,
        afterProperty
      );
      if (!propertyResult.isValid) {
        problems.push(...propertyResult.problems);
      }
    }

    return Revision.getResult(problems);
  }

  static getAddedProperties(
    before: EntityPropertyConfig[],
    after: EntityPropertyConfig[]
  ): EntityPropertyConfig[] {
    return after.filter(
      (afterProperty) =>
        !before.some((beforeProperty) => beforeProperty.id === afterProperty.id)
    );
  }

  static getRemovedProperties(
    before: EntityPropertyConfig[],
    after: EntityPropertyConfig[]
  ): EntityPropertyConfig[] {
    return before.filter(
      (beforeProperty) =>
        !after.some((afterProperty) => beforeProperty.id === afterProperty.id)
    );
  }

  static propertyIsSafe(
    before: EntityPropertyConfig,
    after: EntityPropertyConfig
  ): RevisionCheckResult {
    const problems: RevisionProblems = [];

    if (before.required < after.required) {
      problems.push(RevisionDriftType.MIN_REQUIRED_INCREASED);
    }

    if (before.allowed > after.allowed) {
      problems.push(RevisionDriftType.MAX_ALLOWED_DECREASED);
    }

    if (before.dataType !== after.dataType) {
      problems.push(RevisionDriftType.INCOMPATIBLE_DATA_TYPE_CHANGE);
    }

    return Revision.getResult(problems);
  }

  static getRequiredPropertyInstances(property: EntityPropertyConfig): number {
    return property.required;
  }

  static getAllowedPropertyInstances(property: EntityPropertyConfig): number {
    return property.allowed;
  }

  static getEntityConfigAsString(entityConfig: RevisionEntityConfig): string {
    return `${entityConfig.name ?? ""}|${
      entityConfig.description ?? ""
    }|${entityConfig.properties
      .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
      .map((prop) => Revision.getPropertyConfigAsString(prop))
      .join("|")}`;
  }

  static getPropertyConfigAsString(
    propertyConfig: RevisionEntityPropertyConfig
  ): string {
    let defaultValue = String(propertyConfig.defaultValue) || "";
    if (propertyConfig.dataType === DataType.DATE) {
      defaultValue = "";
    }

    return `${propertyConfig.name ?? ""}/${propertyConfig.prefix ?? ""}/${
      propertyConfig.suffix ?? ""
    }/${propertyConfig.required ?? ""}/${propertyConfig.repeat ?? ""}/${
      propertyConfig.allowed ?? ""
    }/${propertyConfig.dataType ?? ""}/${defaultValue}/${
      propertyConfig.hidden ?? ""
    }`;
  }
}
