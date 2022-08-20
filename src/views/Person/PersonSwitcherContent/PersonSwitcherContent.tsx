import styles from "../../Film/Film.module.scss";
import parse from "html-react-parser";
import React, {FC} from "react";
import {PersonCategory} from "../Person";


interface PersonSwitcherContentProps {
    activeCategory: PersonCategory;
    factsAndErrors: string[];
}

const PersonSwitcherContent:FC<PersonSwitcherContentProps> = React.memo(({ activeCategory, factsAndErrors }) => {
    return (
        <div className={styles.film__switchContent}>
            {
                activeCategory === PersonCategory.FACTS && (
                    <div className={styles.film__facts}>
                        <h6 className={styles.film__factsTitle}>Знаете ли вы, что…</h6>
                        {
                            factsAndErrors?.map(fact => (
                                <p className={styles.film__fact}>
                                    { parse(fact)  }
                                </p>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
})

export default PersonSwitcherContent;
