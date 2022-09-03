import styles from "../SliderItemMovie/SliderItemMovie.module.scss";
import classNames from "classnames";
import React, {FC} from "react";
import {Link} from "react-router-dom";
import {IStaffPerson} from "../../../../types/types";

interface SliderItemStaffProps {
    staff: IStaffPerson
}

const titleOrDash = (title: string): string | React.ReactNode => {
    return title || <span>&mdash</span>;
}

const SliderItemStaff:FC<SliderItemStaffProps> = React.memo(({ staff: {posterUrl, description,
                                                      professionText, nameEn, nameRu, staffId }}) => {
    return (
        <Link to={'/name/' + staffId}>
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
        </Link>
    )
})

export default SliderItemStaff;