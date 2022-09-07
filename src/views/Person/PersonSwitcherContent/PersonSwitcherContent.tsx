import styles from "./PersonSwitcherContent.module.scss";
import React, {FC} from "react";
import {PersonCategory} from "../Person";
import {Facts} from "../../../components";


interface PersonSwitcherContentProps {
    activeCategory: PersonCategory;
    factsAndErrors: string[];
}

const PersonSwitcherContent:FC<PersonSwitcherContentProps> = React.memo(({ activeCategory, factsAndErrors }) => {
    return (
        <div className={styles.person__switchContent}>
            {
                activeCategory === PersonCategory.FACTS && <Facts facts={factsAndErrors} isLoading={false} />
            }
        </div>
    )
})

export default PersonSwitcherContent;
