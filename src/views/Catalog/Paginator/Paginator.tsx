import styles from "./Paginator.module.scss"
import React, {FC, useEffect, useState} from "react";
import classNames from "classnames";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {setPage} from "../../../store/filtersSlice";

interface PaginatorProps {
    totalPages?: number;
}

const PaginatorButton:FC<any> = ({ number, isActive, onClick }) => {
    return (
        <div className={classNames(styles.paginator__button, { [styles.paginator__button_active]: isActive })}>
            <button onClick={onClick}>{number}</button>
        </div>
    )
}

const Paginator:FC<PaginatorProps> = ({ totalPages }) => {

    let { page: activeNumber } = useAppSelector(state => state.filters)
    const startNumber = activeNumber - ((activeNumber - 1) % 5);

    const dispatch = useAppDispatch();

    if (!totalPages || activeNumber > totalPages) return null;

    const setActiveNumber = (number: number) => {
        dispatch(setPage(number))
    }

    const countButtons = 5;
    const buttons = new Array(countButtons).fill(0).filter((_, i) => startNumber + i <= totalPages);

    const nextNumber = () => {
        const newNumber = activeNumber + 1;
        if (newNumber > totalPages) return;
        setActiveNumber(activeNumber + 1);
    }

    const previousNumber = () => {
        if (activeNumber === 1) return;
        setActiveNumber(activeNumber - 1);
    }
    buttons.forEach((_, i) => {
        console.log(startNumber)
    })

    return (
        <div className={styles.paginator}>
            {
                <div className={styles.paginator__arrow}>
                    {
                        activeNumber !== 1 && <svg stroke="currentColor" onClick={previousNumber} fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    }
                </div>
            }
            {
                buttons.map((_, i) => <PaginatorButton number={i + startNumber}
                                                       onClick={() => setActiveNumber(i + startNumber)}
                                                       isActive={activeNumber === i + startNumber}/>)
            }
            {
                <div className={styles.paginator__arrow}>
                    {
                        activeNumber !== totalPages && <svg stroke="currentColor" fill="none" onClick={nextNumber} strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    }
                </div>
            }
        </div>
    )
}

export default Paginator;