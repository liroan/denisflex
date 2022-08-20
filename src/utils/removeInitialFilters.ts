import {FiltersState, initialStateFilter} from "../store/filtersSlice";

const removeInitialFilter = (filtersState: FiltersState): Partial<FiltersState> => {
    return Object.fromEntries(Object.entries(filtersState).filter(([key, value]) => {
        if (key == "genres" && value === 0) return false;
        return value != initialStateFilter[key as keyof FiltersState] && initialStateFilter[key as keyof FiltersState] !== undefined;
    }))
}


export default removeInitialFilter;