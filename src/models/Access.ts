export enum AccessType {
  USER = "user",
  GROUP = "group",
}

export interface AccessPolicyGroup {
  id: string;
  name: string;
  users: string[];
}

export interface AccessRule {
  id: number;
  type: AccessType;
  partyId: string;
}

export interface AccessPolicy {
  id: number;
  name: string;
  description: string;
  accessRules: AccessRule[];
}
