import styles from "../Film.module.scss";
import parse from "html-react-parser";
import React, {FC} from "react";
import {IFactsAndErrors} from "../../../types/types";
import {FilmCategory} from "../Film";


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
                activeCategory === FilmCategory.DESCRIPTION && (
                    <p className={styles.film__description}>{description}</p>
                )
            }
            {
                activeCategory === FilmCategory.ACTORS && children
            }
            {
                activeCategory === FilmCategory.FACTS && (
                    <div className={styles.film__facts}>
                        <h6 className={styles.film__factsTitle}>Знаете ли вы, что…</h6>
                        {
                            factsAndErrors?.items.map((fact, i) => (
                                <p key={i} className={styles.film__fact}>
                                    { parse(fact.text)  }
                                </p>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
})

export default FilmSwitcherContent;