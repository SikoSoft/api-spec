import { User, UserGoogleAccount } from "./Identity";
export interface IntrospectionCommonUser {
    isLoggedIn: true;
    user: User;
    googleLink: boolean;
    sessionId: string;
    expiresAt: Date;
}
export interface IntrospectionWithGoogleLink extends IntrospectionCommonUser {
    googleLink: true;
    googleAccount: UserGoogleAccount;
}
export interface IntrospectionWithoutGoogleLink extends IntrospectionCommonUser {
    googleLink: false;
}
export type IntrospectionUser = IntrospectionWithGoogleLink | IntrospectionWithoutGoogleLink;
export interface IntrospectionAnonymous {
    isLoggedIn: false;
}
export type Introspection = IntrospectionUser | IntrospectionAnonymous;
