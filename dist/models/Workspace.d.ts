export interface Workspace {
    id: string;
    name: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    color: string;
    showEverything: boolean;
    listConfigs: string[];
    theme: string;
}
