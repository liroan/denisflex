import styles from "./EmptyFilms.module.scss";
import React, {FC} from "react";


interface EmptyFilmsProps {
    children?: React.ReactNode | string;
}

const EmptyFilms:FC<EmptyFilmsProps> = ({ children }) => {
    return (
        <div className={styles.header__filmsContent_empty}>
            { children }
        </div>
    )
}

export default EmptyFilms;