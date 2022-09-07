import {FiltersState} from "../store/filtersSlice";

export const removeUnwantedProperties = (object: FiltersState): Partial<FiltersState> => {
    const newObject: Partial<FiltersState> = { ...object };
    if (newObject["genres"] === 0) delete newObject.genres;
    if (newObject["keyword"] === "") delete newObject.keyword;
    return newObject;
}
