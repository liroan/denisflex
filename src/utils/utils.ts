import {FiltersState, initialStateFilter} from "../store/filtersSlice";


export const removeNullableProperty = (object: object): object => {
    return Object.fromEntries(Object.entries(object).filter(p => p[1] !== null))
}

export const getDataWindow = (): { width: number, height: number } => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
}


export const removeInitialFilter = (object: FiltersState): Partial<FiltersState> => {
    return Object.fromEntries(Object.entries(object).filter(p => {
        // @ts-ignore
        console.log(p[0], p[0] == "genres", p[1] === 0)
        if (p[0] == "genres" && p[1] === 0) return false;
        // @ts-ignore
        return p[1] != initialStateFilter[p[0]] && initialStateFilter[p[0]] !== undefined;
    }))
}

export const removeUnwantedProperties = (object: FiltersState): Partial<FiltersState> => {
    const newObject: Partial<FiltersState> = { ...object };
    if (newObject["genres"] === 0) delete newObject.genres;
    if (newObject["keyword"] === "") delete newObject.keyword;
    return newObject;
}