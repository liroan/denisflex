import styles from "../Film.module.scss";
import parse from "html-react-parser";
import React, {FC} from "react";
import {IFactsAndErrors} from "../../../types/types";
import {FilmCategory} from "../Film";
import Facts from "../../../components/Facts/Facts";


interface FilmSwitcherContentProps {
    activeCategory: FilmCategory;
    description: string | null;
    children: React.ReactNode;
    factsAndErrors?: IFactsAndErrors;
}

const FilmSwitcherContent:FC<FilmSwitcherContentProps> = React.memo(({ activeCategory, description, children, factsAndErrors }) => {
    return (
        <div className={styles.film__switchContent}>
            {
                activeCategory === FilmCategory.DESCRIPTION && (<p className={styles.film__description}>{description}</p>)
            }
            {
                activeCategory === FilmCategory.ACTORS && children
            }
            {
                activeCategory === FilmCategory.FACTS && (
                    <Facts facts={factsAndErrors?.items} />
                )
            }
        </div>
    )
})

export default FilmSwitcherContent;