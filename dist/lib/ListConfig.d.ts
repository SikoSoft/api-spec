import { Entity } from "../models/Entity";
import { ListFilter } from "../models/List";
export declare class ListConfig {
    static entitySatisfiesFilter(entity: Entity, listFilter: ListFilter): boolean;
}
