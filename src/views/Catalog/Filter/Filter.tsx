import classNames from "classnames";
import styles from "./Filter.module.scss";
import RangeSlider from "../../../components/RangeSlider/RangeSlider";
import React, {Dispatch, FC, SetStateAction} from "react";
import Accordion from "./Accordion/Accordion";
import RedButton from "../../../components/Buttons/RedButton/RedButton";
import OpacityButton from "../../../components/Buttons/OpacityButton/OpacityButton";
import SelectComponent from "../../../components/Select/Select";
import Checkboxes from "./Checkboxes/Checkboxes";
import Marks from "./Marks/Marks";
import FilterHeader from "./FilterHeader/FilterHeader";

interface FilterProps {
    isShowFilters: boolean;
    setIsShowFilters: Dispatch<SetStateAction<boolean>>;
}

const Filter:FC<FilterProps> = ({ isShowFilters, setIsShowFilters }) => {
    return (
        <div className={classNames(styles.filter, { [styles.filterTransform]: isShowFilters })}>

            <FilterHeader setIsShowFilters={setIsShowFilters}/>

            <div className={styles.filter__wrapper}>

                <Marks />

                <Accordion title="Рейтинг">
                    <RangeSlider min={1} max={10} />
                </Accordion>

                <Accordion title="Годы производства">
                    <RangeSlider min={1960} max={2022} />
                </Accordion>

                <Accordion title="Жанры">
                    <SelectComponent id="genres-select" title="Жанры" options={['Драмы', 'Комедии', 'Ужасы']}/>
                </Accordion>

                <Accordion title="Сортировка">
                    <Checkboxes />
                </Accordion>

                <div className={classNames(styles.filter__buttons)}>
                    <RedButton onClick={() => console.log('lol')}>Применить</RedButton>
                    <OpacityButton onClick={() => console.log('lol')}>Сбросить</OpacityButton>
                </div>
            </div>
        </div>
    )
}

export default Filter;