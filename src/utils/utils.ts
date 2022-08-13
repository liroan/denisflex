import {FiltersState, initialStateFilter} from "../store/filtersSlice";


export const removeNullableProperty = (object: object): object => {
    return Object.fromEntries(Object.entries(object).filter(p => p[1] !== null))
}

export const getDataWindow = (): { width: number, height: number } => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
}


export const removeInitialFilter = (object: FiltersState): Partial<FiltersState> => {
    // @ts-ignore
    return Object.fromEntries(Object.entries(object).filter(p => p[1] != initialStateFilter[p[0]]))
}