import styles from "../SliderItemMovie/SliderItemMovie.module.scss";
import classNames from "classnames";
import React, {FC} from "react";

interface SliderItemStaffProps {
    posterUrl: string;
    description: string | null;
    professionText: string;
    nameRu: string;
    nameEn: string;
}

const titleOrDash = (title: string): string | React.ReactNode => {
    return title || <span>&mdash</span>;
}

const SliderItemStaff:FC<SliderItemStaffProps> = ({posterUrl, description,
                                                      professionText, nameEn, nameRu}) => {
    return (
        <div className={styles.movieCardContainer}>
            <div className={styles.movieCard}>
                <img src={posterUrl} alt=""/>
                <div className={styles.movieCard__marks}>
                    <div className={classNames(styles.movieCard__mark, styles.movieCard__mark_gray)}>{ titleOrDash(professionText) }</div>
                </div>
            </div>
            <h3 className={styles.movieCardContainer__name}>{nameRu || nameEn}</h3>
            <h4 className={styles.movieCardContainer__role}>{ description }</h4>
        </div>
    )
}

export default SliderItemStaff;