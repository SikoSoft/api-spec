export var DataType;
(function (DataType) {
    DataType["BOOLEAN"] = "boolean";
    DataType["DATE"] = "date";
    DataType["IMAGE"] = "image";
    DataType["INT"] = "int";
    DataType["LONG_TEXT"] = "longText";
    DataType["SHORT_TEXT"] = "shortText";
})(DataType || (DataType = {}));
export const defaultEntityPropertyConfig = {
    entityConfigId: 0,
    id: 0,
    userId: "",
    name: "",
    prefix: "",
    suffix: "",
    required: 0,
    repeat: 1,
    allowed: 1,
    dataType: DataType.SHORT_TEXT,
    defaultValue: "",
    hidden: false,
};
export const defaultEntityConfig = {
    id: 0,
    userId: "",
    name: "",
    description: "",
    properties: [],
};
//# sourceMappingURL=Entity.js.map