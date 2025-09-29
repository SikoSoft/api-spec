import { RevisionDriftType, } from "../models/Revision";
export class Revision {
    static getResult(problems) {
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
    static propertiesAreSafe(before, after) {
        const problems = [];
        const addedProperties = Revision.getAddedProperties(before, after);
        const newPropertyHasRequired = addedProperties.some((addedProperty) => addedProperty.required > 0);
        if (newPropertyHasRequired) {
            problems.push(RevisionDriftType.NEW_PROPERTY_HAS_REQUIRED);
        }
        for (const afterProperty of after) {
            const beforeProperty = before.find((property) => afterProperty.id === property.id);
            if (!beforeProperty) {
                continue;
            }
            const propertyResult = Revision.propertyIsSafe(beforeProperty, afterProperty);
            if (!propertyResult.isValid) {
                problems.push(...propertyResult.problems);
            }
        }
        return Revision.getResult(problems);
    }
    static getAddedProperties(before, after) {
        return after.filter((afterProperty) => !before.some((beforeProperty) => beforeProperty.id === afterProperty.id));
    }
    static getRemovedProperties(before, after) {
        return before.filter((beforeProperty) => !after.some((afterProperty) => beforeProperty.id === afterProperty.id));
    }
    static propertyIsSafe(before, after) {
        const problems = [];
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
    static getRequiredPropertyInstances(property) {
        return property.required;
    }
    static getAllowedPropertyInstances(property) {
        return property.allowed;
    }
}
//# sourceMappingURL=Revision.js.map