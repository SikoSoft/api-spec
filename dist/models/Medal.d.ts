export interface MedalCriteria {
    id: number;
    medalId: number;
    type: string;
    value: string;
    createdAt: string;
    updatedAt: string;
}
export interface Medal {
    id: number;
    name: string;
    description: string;
    series: string;
    recurrence: number;
    prestige: number;
    icon: string;
    createdAt: string;
    updatedAt: string;
    criteria: MedalCriteria[];
}
