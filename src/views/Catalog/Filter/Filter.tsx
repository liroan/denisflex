import classNames from "classnames";
import styles from "./Filter.module.scss";
import React, {Dispatch, FC, SetStateAction, useCallback, useEffect, useMemo, useState} from "react";
import {RedButton, OpacityButton} from "../../../components";
import Marks from "./Marks/Marks";
import FilterHeader from "./FilterHeader/FilterHeader";
import {changeFiltersHandle, FiltersState, resetFilters} from "../../../store/filtersSlice";
import {useAppDispatch, useSizeWindow} from "../../../hooks";
import {IGenre, MovieType} from "../../../types";
import Rating from "./Fields/Rating/Rating";
import Years from "./Fields/Years/Years";
import Genres from "./Fields/Genres/Genres";
import Type from "./Fields/Type/Type";
import CheckboxAccordion from "./Fields/CheckboxAccordeon/CheckboxAccordeon";

interface FilterProps {
    isShowFilters: boolean;
    setIsShowFilters: Dispatch<SetStateAction<boolean>>;
    filters: FiltersState;
    genres?: IGenre[];
}

export const MovieTypeFilter: MovieType[] = ["ALL", "FILM", "TV_SHOW", "TV_SERIES"];


const types = ["все", "фильмы", "тв-шоу", "сериалы"];

const Filter: FC<FilterProps> = React.memo(({isShowFilters, setIsShowFilters, filters, genres}) => {


    const [formData, setFormData] = useState(filters);
    const {width} = useSizeWindow();

    useEffect(() => {
        setFormData(filters)
    }, [filters])

    useEffect(() => {
        document.body.style.overflowY = isShowFilters && width <= 1100 ? "hidden" : "unset";
    }, [isShowFilters, width])

    const dispatch = useAppDispatch();

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        dispatch(changeFiltersHandle(formData))
        event.preventDefault();
    }, [formData])

    const changeValue = useCallback((name: string) => (value: string | number) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }, []);

    const genresNames = useMemo(() => genres ? genres.map(genre => genre.genre) : [], [genres]);

    const hideFilters = useCallback(() => setIsShowFilters(false), []);

    const reset = useCallback(() => {
        dispatch(resetFilters())
        hideFilters()
    }, [])


    return (
        <form onSubmit={handleSubmit} className={classNames(styles.filter, {[styles.filterTransform]: isShowFilters})}>

            <FilterHeader setIsShowFilters={setIsShowFilters}/>

            <div className={styles.filter__wrapper}>

                <Marks filters={filters} genresNames={genresNames}/>

                <Rating changeValue={changeValue} ratingFrom={formData.ratingFrom} ratingTo={formData.ratingTo}/>
                <Years changeValue={changeValue} yearFrom={formData.yearFrom} yearTo={formData.yearTo}/>
                <Genres changeValue={changeValue} genres={formData.genres} genresNames={genresNames}/>
                <Type changeValue={changeValue} type={formData.type} types={types}/>
                <CheckboxAccordion order={formData.order} changeValue={changeValue}/>

                <div className={classNames(styles.filter__buttons)}>
                    <RedButton type="submit" onClick={hideFilters}>Применить</RedButton>
                    <OpacityButton onClick={reset} type="button">Сбросить</OpacityButton>
                </div>

            </div>
        </form>
    )
})

export default Filter;