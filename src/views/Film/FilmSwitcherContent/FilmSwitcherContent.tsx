import styles from "../Film.module.scss";
import parse from "html-react-parser";
import React, {FC} from "react";
import {IFactsAndErrors} from "../../../types/types";
import {FilmCategory} from "../Film";
import Facts from "../../../components/Facts/Facts";
import EmptyContent from "../../../components/EmptyContent/EmptyContent";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";


interface FilmSwitcherContentProps {
    activeCategory: FilmCategory;
    description: string | null;
    children: React.ReactNode;
    factsAndErrors?: IFactsAndErrors;
    factsLoading: boolean;
    factsError?: FetchBaseQueryError | SerializedError;
}

const FilmSwitcherContent:FC<FilmSwitcherContentProps> = React.memo(({ activeCategory, description, factsLoading,
                                                                         factsError, children, factsAndErrors }) => {
    return (
        <div className={styles.film__switchContent}>
            {
                activeCategory === FilmCategory.DESCRIPTION && (
                    !description ? <EmptyContent /> :
                    <p className={styles.film__description}>
                        {description}
                    </p>)
            }
            {
                activeCategory === FilmCategory.ACTORS && children
            }
            {
                activeCategory === FilmCategory.FACTS && (
                    <Facts facts={factsAndErrors?.items} error={factsError} isLoading={factsLoading}/>
                )
            }
        </div>
    )
})

export default FilmSwitcherContent;