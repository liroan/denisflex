import React, {FC, useEffect, useState} from "react";
import styles from "./Catalog.module.scss";
import Container from "../../components/Container/Container";
import Filter from "./Filter/Filter";
import CatalogInfo from "./CatalogInfo/CatalogInfo";
import CatalogFilms from "./CatalogFilms/CatalogFilms";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {useGetCountriesAndGenresQuery, useGetFiltersMovieQuery} from "../../services/services";
import {useSearchParams} from "react-router-dom";
import {changeFiltersFromUrl, FiltersState } from "../../store/filtersSlice";
import * as queryString from "query-string";
import {IGenre} from "../../types/types";
import removeInitialFilter from "../../utils/removeInitialFilters";



const Catalog:FC = () => {

    const [isShowFilters, setIsShowFilters] = useState(false);
    const [genresWithAllGenres, setGenresWithAllGenres] = useState<IGenre[]>([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const filters = useAppSelector(state => state.filters);
    const { data: genresAndCountries } = useGetCountriesAndGenresQuery(null);
    const { data: filmsResponse, isFetching } = useGetFiltersMovieQuery(filters);
    const dispatch = useAppDispatch();


    useEffect(() => { // парсим параметры из браузерной строки в стэйт
        const params: Partial<FiltersState> = {};
        searchParams.forEach((value, key) => {
            // @ts-ignore
            params[key as keyof FiltersState] = +value ? +value : value;
        });
        dispatch(changeFiltersFromUrl(params));
    }, [searchParams])

    useEffect(() => {  // данные из state засовываем в строку
        const filterWithoutInitialValue = removeInitialFilter(filters);
        setSearchParams(queryString.stringify(filterWithoutInitialValue))
    }, [filters])

    useEffect(() => { // добавляет к жанрам еще один жанр "Все жанры"
        if (genresAndCountries) {
            const allGenres: IGenre =  { id: genresAndCountries.genres[genresAndCountries.genres.length - 1].id + 1,genre: "Все жанры" }
            setGenresWithAllGenres([allGenres, ...genresAndCountries.genres])
        }
    }, [genresAndCountries])


    return (
        <div className={styles.catalog}>
            <Container>
                <Container>
                    <CatalogInfo setIsShowFilters={setIsShowFilters} keyword={filters.keyword}/>
                    <div className={styles.catalog__mainInfo}>
                        <div className={styles.catalog__filter}>
                            <Filter isShowFilters={isShowFilters} setIsShowFilters={setIsShowFilters}
                                    filters={filters} genres={genresWithAllGenres}/>
                        </div>
                        <CatalogFilms filmsResponse={filmsResponse} isFetching={isFetching} />
                    </div>
                </Container>
            </Container>
        </div>
    )
}

export default Catalog;