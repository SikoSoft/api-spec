export class ListConfig {
    static entitySatisfiesFilter(entity, listFilter) {
        if (listFilter.includeAll) {
            return true;
        }
        if (listFilter.includeTypes.length > 0 &&
            !listFilter.includeTypes.includes(entity.type)) {
            return false;
        }
        if (!listFilter.includeAllTagging) {
            if (!(listFilter.includeUntagged && entity.tags.length === 0)) {
                if (!listFilter.tagging.containsAllOf.every((tag) => entity.tags.includes(tag))) {
                    return false;
                }
                if (listFilter.tagging.containsOneOf.length > 0 &&
                    !listFilter.tagging.containsOneOf.some((tag) => entity.tags.includes(tag))) {
                    return false;
                }
            }
        }
        return true;
    }
}
//# sourceMappingURL=ListConfig.js.map