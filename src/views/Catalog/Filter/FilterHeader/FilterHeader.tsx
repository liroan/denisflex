import styles from "./FilterHeader.module.scss";
import RedButton from "../../../../components/Buttons/RedButton/RedButton";
import React, {Dispatch, FC, SetStateAction} from "react";

interface FilterHeaderProps {
    setIsShowFilters: Dispatch<SetStateAction<boolean>>;
}

const FilterHeader:FC<FilterHeaderProps> = ({ setIsShowFilters }) => {
    return (
        <div className={styles.filter__header}>
            <RedButton onClick={() => console.log('lol')} type="submit">Применить</RedButton>
            <h5>Фильтры</h5>
            <div className={styles.filter__exit}>
                <button onClick={() => setIsShowFilters(false)} type="button">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </div>
        </div>
    )
}

export default FilterHeader;