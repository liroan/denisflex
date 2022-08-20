import classNames from "classnames";
import styles from "./Filter.module.scss";
import RangeSlider from "../../../components/RangeSlider/RangeSlider";
import React, {Dispatch, FC, SetStateAction, useCallback, useEffect, useMemo, useState} from "react";
import Accordion from "./Accordion/Accordion";
import RedButton from "../../../components/Buttons/RedButton/RedButton";
import OpacityButton from "../../../components/Buttons/OpacityButton/OpacityButton";
import SelectComponent from "../../../components/Select/Select";
import Checkboxes from "./Checkboxes/Checkboxes";
import Marks from "./Marks/Marks";
import FilterHeader from "./FilterHeader/FilterHeader";
import {changeFiltersHandle, FiltersState, resetFilters} from "../../../store/filtersSlice";
import {useAppDispatch} from "../../../hooks/reduxHooks";
import {IGenre, MovieType} from "../../../types/types";
import useSizeWindow from "../../../hooks/useSizeWindow";

interface FilterProps {
    isShowFilters: boolean;
    setIsShowFilters: Dispatch<SetStateAction<boolean>>;
    filters: FiltersState;
    genres?: IGenre[];
}

export const MovieTypeFilter: MovieType[] = ["ALL", "FILM", "TV_SHOW", "TV_SERIES"];

const convertToMovieType = (value: string) => MovieTypeFilter[+value];
const convertToNumber = (value: string) => +value;

const types = ["все", "фильмы", "тв-шоу", "сериалы"];

const Filter:FC<FilterProps> = React.memo(({ isShowFilters, setIsShowFilters, filters, genres }) => {


    const [formData, setFormData] = useState(filters);
    const { width } = useSizeWindow();

    useEffect(() => {
        setFormData(filters)
    }, [filters])

    useEffect(() => { // убираем второй скролл у окна фильтров
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




    return (
        <form onSubmit={handleSubmit} className={classNames(styles.filter, { [styles.filterTransform]: isShowFilters })}>

            <FilterHeader setIsShowFilters={setIsShowFilters}/>

            <div className={styles.filter__wrapper}>

                <Marks filters={filters} genresNames={genresNames} />

                <Accordion title="Рейтинг">
                    <RangeSlider min={1} max={10}
                                 idFirstField="ratingFrom" idSecondField="ratingTo"
                                 fromValue={formData.ratingFrom} beforeValue={formData.ratingTo}
                                 changeValue={changeValue}
                    />
                </Accordion>

                <Accordion title="Годы производства">
                    <RangeSlider min={1900} max={2022}
                                 idFirstField="yearFrom" idSecondField="yearTo"
                                 fromValue={formData.yearFrom} beforeValue={formData.yearTo}
                                 changeValue={changeValue}

                    />
                </Accordion>

                <Accordion title="Жанры">
                    <SelectComponent id="genres" title="Жанры"
                                     options={genresNames}
                                     value={formData.genres}
                                     changeValue={changeValue}
                                     mutator={convertToNumber}
                     />
                </Accordion>

                <Accordion title="Тип произведения">
                    <SelectComponent id="type" title="Тип произведения"
                                     options={types}
                                     value={MovieTypeFilter.indexOf(formData.type)}
                                     changeValue={changeValue}
                                     mutator={convertToMovieType}
                    />
                </Accordion>

                <Accordion title="Сортировка">
                    <Checkboxes value={formData.order} name="order"  changeValue={changeValue} />
                </Accordion>

                <div className={classNames(styles.filter__buttons)}>
                    <RedButton type="submit">Применить</RedButton>
                    <OpacityButton onClick={() => dispatch(resetFilters())} type="button">Сбросить</OpacityButton>
                </div>

            </div>
        </form>
    )
})

export default Filter;