import styles from "../../views/Film/Film.module.scss";
import classNames from "classnames";
import React, {FC} from "react";
import {FilmCategory} from "../../views/Film/Film";
import {PersonCategory} from "../../views/Person/Person";

interface FilmSwitcherProps {
    activeCategory: FilmCategory | PersonCategory;
    switcher: {id: number, title: string, value: any}[];
    setActiveCategory:  React.Dispatch<React.SetStateAction<FilmCategory>> | React.Dispatch<React.SetStateAction<PersonCategory>>;
}

const FilmSwitcher:FC<FilmSwitcherProps> = React.memo(({ activeCategory, switcher, setActiveCategory }) => {
    return (
        <div className={styles.film__switch}>
            {
                switcher.map(({ id, title, value }) => (
                    <div key={id}
                         className={classNames(styles.film__option, { [styles.film__activeOption]: value === activeCategory })}
                         onClick={setActiveCategory && (() => {setActiveCategory(value)
                    })}>
                        { title }
                    </div>
                ))
            }
            <div className={styles.film__switchBorder}/>
        </div>
    )
})

export default FilmSwitcher;