import styles from "./Switcher.module.scss";
import classNames from "classnames";
import React, {FC} from "react";
import {FilmCategory} from "../../views/Film/Film";
import {PersonCategory} from "../../views/Person/Person";

interface FilmSwitcherProps {
    activeCategory: FilmCategory | PersonCategory;
    switcher: {id: number, title: string, value: any}[];
    setActiveCategory:  React.Dispatch<React.SetStateAction<FilmCategory>> | React.Dispatch<React.SetStateAction<PersonCategory>>;
}

const Switcher:FC<FilmSwitcherProps> = React.memo(({ activeCategory, switcher, setActiveCategory }) => {
    return (
        <div className={styles.switcher__switch}>
            {
                switcher.map(({ id, title, value }) => (
                    <div key={id}
                         className={classNames(styles.switcher__option, { [styles.switcher__activeOption]: value === activeCategory })}
                         onClick={setActiveCategory && (() => {setActiveCategory(value)
                    })}>
                        { title }
                    </div>
                ))
            }
            <div className={styles.switcher__switchBorder}/>
        </div>
    )
})

export default Switcher;