export declare enum AccessPartyType {
    USER = "user",
    GROUP = "group"
}
export interface AccessPolicyGroup {
    id: string;
    name: string;
    users: string[];
}
export interface AccessRule {
    id: number;
    type: AccessPartyType;
    partyId: string;
}
export interface AccessPolicy {
    id: number;
    name: string;
    description: string;
    accessRules: AccessRule[];
}
export interface AccessPolicyParty {
    id: string;
    type: AccessPartyType;
    name: string;
}
