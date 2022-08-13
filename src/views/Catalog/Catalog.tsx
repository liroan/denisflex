import React, {FC, useEffect, useState} from "react";
import styles from "./Catalog.module.scss";
import Container from "../../components/Container/Container";
import Filter from "./Filter/Filter";
import CatalogInfo from "./CatalogInfo/CatalogInfo";
import CatalogFilms from "./CatalogFilms/CatalogFilms";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {useGetFiltersMovieQuery} from "../../services/services";
import {useSearchParams} from "react-router-dom";
import {changeFiltersFromUrl, FiltersState, initialStateFilter} from "../../store/filtersSlice";
import * as queryString from "query-string";
import {removeInitialFilter} from "../../utils/utils";

const Catalog:FC = () => {
    const [isShowFilters, setIsShowFilters] = useState(false);
    const filters = useAppSelector(state => state.filters);
    const { data: films, isLoading, error } = useGetFiltersMovieQuery(filters);


    let [searchParams, setSearchParams] = useSearchParams();

    const params: Partial<FiltersState> = {};
    searchParams.forEach((value, key) => { // @ts-ignore
        params[key] = value;
    });
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(changeFiltersFromUrl(params));
    }, [])
    useEffect(() => {
        const filterWithoutInitialValue = removeInitialFilter(filters);
        console.log(filterWithoutInitialValue, filters, initialStateFilter)
        setSearchParams(queryString.stringify(filterWithoutInitialValue))
    }, [filters])


    return (
        <div className={styles.catalog}>
            <Container>
                <Container>
                    <CatalogInfo setIsShowFilters={setIsShowFilters}/>
                    <div className={styles.catalog__mainInfo}>
                        <div className={styles.catalog__filter}>
                            <Filter isShowFilters={isShowFilters} setIsShowFilters={setIsShowFilters} filters={filters}/>
                        </div>
                        <CatalogFilms />
                    </div>
                </Container>
            </Container>
        </div>
    )
}

export default Catalog;