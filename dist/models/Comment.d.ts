import { User } from "./Identity";
export interface CommonComment {
    id: number;
    entityId: number;
    content: string;
    createdAt: string;
    updatedAt: string;
    user: User | null;
}
export interface AnonymousComment extends CommonComment {
    user: null;
}
export interface UserComment extends CommonComment {
    user: User;
}
export declare enum CommentReactionType {
    LIKE = "like",
    DISLIKE = "dislike"
}
