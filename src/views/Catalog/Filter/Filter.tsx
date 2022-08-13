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
import {changeFiltersHandle, FiltersState, initialStateFilter, resetFilters} from "../../../store/filtersSlice";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {IGenre} from "../../../types/types";

interface FilterProps {
    isShowFilters: boolean;
    setIsShowFilters: Dispatch<SetStateAction<boolean>>;
    filters: FiltersState;
    genres?: IGenre[];
}

const Filter:FC<FilterProps> = ({ isShowFilters, setIsShowFilters, filters, genres }) => {


    const [formData, setFormData] = useState(filters);

    useEffect(() => {
        setFormData(filters)
    }, [filters])

    const dispatch = useAppDispatch();
   /* const [ratingFrom, setRatingFrom] = useState(1);
    const [ratingTo, setRatingTo] = useState(10);
    const [yearFrom, setYearFrom] = useState(1960);
    const [yearTo, setYearTo] = useState(2022);
    const [genre, setGenre] = useState('Драмы');
    const [order, setOrder] = useState();
    const [type, setType] = useState();*/

    const handleSubmit = (event: any) => {
        dispatch(changeFiltersHandle(formData))
        event.preventDefault();
    }

    const changeValue = (name: string) => (value: any) => {
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
                                 fromValue={formData.ratingFrom} beforeValue={formData.ratingTo}
                                 setFromValue={changeValue('ratingFrom')}
                                 setBeforeValue={changeValue('ratingTo')}
                    />
                </Accordion>

                <Accordion title="Годы производства">
                    <RangeSlider min={1900} max={2022}
                                 fromValue={formData.yearFrom} beforeValue={formData.yearTo}
                                 setFromValue={changeValue('yearFrom')}
                                 setBeforeValue={changeValue('yearTo')}

                    />
                </Accordion>

                <Accordion title="Жанры">
                    <SelectComponent id="genres-select" title="Жанры"
                                     options={genresNames}
                                     value={formData.genres} setValue={changeValue('genres')}
                     />
                </Accordion>

                <Accordion title="Сортировка">
                    <Checkboxes value={formData.order} onChange={changeValue('order')} />
                </Accordion>

                <div className={classNames(styles.filter__buttons)}>
                    <RedButton type="submit">Применить</RedButton>
                    <OpacityButton onClick={() => dispatch(resetFilters())}>Сбросить</OpacityButton>
                </div>

            </div>
        </form>
    )
}

export default Filter;