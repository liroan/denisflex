import styles from "../../views/Film/Film.module.scss";
import RedButton from "../Buttons/RedButton/RedButton";
import OpacityButton from "../Buttons/OpacityButton/OpacityButton";
import React, {FC} from "react";
import {getConvertedPropertyOrDash} from "../../utils/utils";


interface DetailedContentProps {
    poster: string,
    title: string | null;
    subtitle: string | null;
    year?: number | null;
    isFilm?: boolean;
    findProperty: (value: any) => any;
    lineTitles: { id: number, title: string, value: any, converter?: ((value: any) => string | React.ReactNode)}[]
}

const DetailedContent:FC<DetailedContentProps> = React.memo(({ poster, title, subtitle, year,
                                                      isFilm, findProperty, lineTitles }) => {
    return (
        <div className={styles.film__content}>
            <div className={styles.film__poster}>
                <img src={poster} alt=""/>
            </div>
            <div className={styles.film__info}>
                <h1 className={styles.film__title}>{ title }{ isFilm ? `, (${year})` : ''}</h1>
                <h5 className={styles.film__subtitle}>{subtitle}</h5>
                {
                    isFilm && (
                        <div className={styles.film__buttons}>
                            <RedButton>Смотреть</RedButton>
                            <OpacityButton>Добавить в избранное</OpacityButton>
                        </div>
                    )
                }
                <div className={styles.film__about}>{isFilm ? 'О фильме' : 'О персоне'}</div>
                <div className={styles.film__dataLines}>
                    {
                        lineTitles.map(({ title, value, converter }) => (
                            <div className={styles.film__dataLine}>
                                <div className={styles.film__lineTitle}>
                                    { title }
                                </div>
                                <div className={styles.film__lineInfo}>
                                    { value && getConvertedPropertyOrDash(findProperty(value), converter) }
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
})

export default DetailedContent;