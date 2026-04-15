export interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  roles: string[];
}

export interface UserGoogleAccount {
  userId: string;
  googleId: string;
  email: string;
  refreshToken: string;
  addedAt: Date;
}

export enum Role {
  AI = "orbit-ai",
  NUKE = "orbit-nuke",
  ACCESS = "orbit-access",
}
