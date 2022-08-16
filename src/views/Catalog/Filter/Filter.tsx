import classNames from "classnames";
import styles from "./Filter.module.scss";
import RangeSlider from "../../../components/RangeSlider/RangeSlider";
import React, {Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import Accordion from "./Accordion/Accordion";
import RedButton from "../../../components/Buttons/RedButton/RedButton";
import OpacityButton from "../../../components/Buttons/OpacityButton/OpacityButton";
import SelectComponent from "../../../components/Select/Select";
import Checkboxes from "./Checkboxes/Checkboxes";
import Marks from "./Marks/Marks";
import FilterHeader from "./FilterHeader/FilterHeader";
import {changeFiltersHandle, FiltersState, resetFilters} from "../../../store/filtersSlice";
import {useAppDispatch, useSizeWindow} from "../../../hooks/hooks";
import {IGenre} from "../../../types/types";
import {MovieTypeFilter} from "../../../constants/constants";

interface FilterProps {
    isShowFilters: boolean;
    setIsShowFilters: Dispatch<SetStateAction<boolean>>;
    filters: FiltersState;
    genres?: IGenre[];
}

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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        dispatch(changeFiltersHandle(formData))
        event.preventDefault();
    }

    const changeValue = (name: string) => (value: string | number) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }))
    }

    const genresNames = genres ? genres.map(genre => genre.genre) : [];




    return (
        <form onSubmit={handleSubmit} className={classNames(styles.filter, { [styles.filterTransform]: isShowFilters })}>

            <FilterHeader setIsShowFilters={setIsShowFilters}/>

            <div className={styles.filter__wrapper}>

                <Marks filters={filters} genresNames={genresNames} />

                <Accordion title="Рейтинг">
                    <RangeSlider min={1} max={10}
                                 idFirstField="ratingFrom" idSecondField="ratingTo"
                                 fromValue={formData.ratingFrom} beforeValue={formData.ratingTo}
                                 setFromValue={changeValue('ratingFrom')}
                                 setBeforeValue={changeValue('ratingTo')}
                    />
                </Accordion>

                <Accordion title="Годы производства">
                    <RangeSlider min={1900} max={2022}
                                 idFirstField="yearFrom" idSecondField="yearTo"
                                 fromValue={formData.yearFrom} beforeValue={formData.yearTo}
                                 setFromValue={changeValue('yearFrom')}
                                 setBeforeValue={changeValue('yearTo')}

                    />
                </Accordion>

                <Accordion title="Жанры">
                    <SelectComponent id="genres-select" title="Жанры"
                                     options={genresNames}
                                     value={formData.genres} setValue={changeValue('genres')}
                                     mutator={(value: string) => +value}
                     />
                </Accordion>

                <Accordion title="Тип произведения">
                    <SelectComponent id="types-select" title="Тип произведения"
                                     options={["все", "фильмы", "тв-шоу", "сериалы"]}
                                     value={MovieTypeFilter.indexOf(formData.type)} setValue={changeValue('type')}
                                     mutator={(value: string) => MovieTypeFilter[+value]}
                    />
                </Accordion>

                <Accordion title="Сортировка">
                    <Checkboxes value={formData.order} onChange={changeValue('order')} />
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