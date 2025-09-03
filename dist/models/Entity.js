export const defaultEntityPropertyConfig = {
    propertyId: 0,
    repeat: 1,
    allowed: 1,
    required: 0,
};
export const defaultEntityConfig = {
    id: 0,
    name: "",
    properties: [],
};
export var DataType;
(function (DataType) {
    DataType["BOOLEAN"] = "boolean";
    DataType["IMAGE"] = "image";
    DataType["INT"] = "int";
    DataType["LONG_TEXT"] = "longText";
    DataType["SHORT_TEXT"] = "shortText";
})(DataType || (DataType = {}));
export var RenderType;
(function (RenderType) {
    RenderType["TEXT"] = "text";
    RenderType["IMAGE"] = "image";
    RenderType["NUMBER"] = "number";
    RenderType["HIDDEN"] = "hidden";
})(RenderType || (RenderType = {}));
//# sourceMappingURL=Entity.js.map