import React, {useEffect} from "react";
import {Link, useParams, useSearchParams} from "react-router-dom";
import * as queryString from "query-string";
import {changeFiltersFromUrl, changeFiltersHandle, FiltersState} from "../../store/filtersSlice"
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";

const FilterTest = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const params: Partial<FiltersState> = {};
    searchParams.forEach((value, key) => {
        // @ts-ignore
        params[key] = value;
    });
    const dispatch = useAppDispatch();
    const filters = useAppSelector(state => state.filters);
    useEffect(() => {
        dispatch(changeFiltersFromUrl(params));
        console.log(params)
    }, [])
    useEffect(() => {
        const newFilters = Object.fromEntries(Object.entries(filters).filter(filter => filter[1] !== null));
        setSearchParams(queryString.stringify(newFilters))
    }, [filters])
    return (
        <>
            <Link to='/film'>перейти на фильм</Link>
            <button onClick={() => dispatch(changeFiltersHandle({ order: "YEAR" }))}>добавить фильтр на сортировку</button>

        </>
    )
}

export default FilterTest;