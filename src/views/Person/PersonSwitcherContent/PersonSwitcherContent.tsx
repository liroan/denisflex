import styles from "../../Film/Film.module.scss";
import parse from "html-react-parser";
import React, {FC} from "react";
import {PersonCategory} from "../Person";
import Facts from "../../../components/Facts/Facts";


interface PersonSwitcherContentProps {
    activeCategory: PersonCategory;
    factsAndErrors: string[];
}

const PersonSwitcherContent:FC<PersonSwitcherContentProps> = React.memo(({ activeCategory, factsAndErrors }) => {
    return (
        <div className={styles.film__switchContent}>
            {
                activeCategory === PersonCategory.FACTS && <Facts facts={factsAndErrors} />
            }
        </div>
    )
})

export default PersonSwitcherContent;
