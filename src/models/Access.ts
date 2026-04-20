export enum AccessPartyType {
  USER = "user",
  GROUP = "group",
}

export interface AccessPolicyGroupUser {
  id: string;
  name: string;
}

export interface AccessPolicyGroup {
  id: string;
  name: string;
  users: AccessPolicyGroupUser[];
}

export interface AccessPolicyUserParty {
  type: AccessPartyType.USER;
  id: string;
  name: string;
  userId: string;
}

export interface AccessPolicyGroupParty {
  type: AccessPartyType.GROUP;
  id: string;
  name: string;
  groupId: string;
  users: AccessPolicyGroupUser[];
}

export type AccessPolicyParty = AccessPolicyUserParty | AccessPolicyGroupParty;

export interface AccessPolicy {
  id: number;
  name: string;
  description: string;
  parties: AccessPolicyParty[];
}
