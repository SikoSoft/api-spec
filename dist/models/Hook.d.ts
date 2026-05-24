export declare enum HookType {
    PRE_CREATE = "preCreate",
    POST_CREATE = "postCreate",
    PRE_UPDATE = "preUpdate",
    POST_UPDATE = "postUpdate",
    PRE_DELETE = "preDelete",
    POST_DELETE = "postDelete"
}
export type PreCreateContext = {
    type: HookType.PRE_CREATE;
};
