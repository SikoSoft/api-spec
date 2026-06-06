export enum Theme {
  LIGHT = "light",
  DARK = "dark",
  SYSTEM = "system",
}

export interface Workspace {
  id: string;
  name: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  color: string;
  showEverything: boolean;
  listConfigs: string[];
  theme: Theme;
}
