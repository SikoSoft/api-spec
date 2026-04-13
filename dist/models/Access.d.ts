export declare enum AccessType {
    USER = "user",
    GROUP = "group"
}
export interface AccessRule {
    id: number;
    type: AccessType;
    targetId: string;
}
export interface AccessPolicy {
    id: number;
    name: string;
    description: string;
    accessRules: AccessRule[];
}
