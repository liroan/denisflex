import styles from "./DetailedContent.module.scss";
import RedButton from "../Buttons/RedButton/RedButton";
import React, {FC} from "react";
import {getConvertedPropertyOrDash} from "../../utils";
import FavouritesButton from "../Buttons/FavouritesButton/FavouritesButton";
import {Link} from "react-router-dom";

interface DetailedContentProps {
    poster: string,
    title: string | null;
    subtitle: string | null;
    year?: number | null;
    isFilm?: boolean;
    findProperty: (value: any) => any;
    lineTitles: { id: number, title: string, value: any, converter?: ((value: any) => string | React.ReactNode) }[];
    isFavourite?: boolean;
    toggler?: () => void;
    kinopoiskId?: number;
}

const DetailedContent: FC<DetailedContentProps> = React.memo(({
                                                                  poster, title, subtitle, year,
                                                                  isFavourite, toggler,
                                                                  isFilm, findProperty, lineTitles, kinopoiskId
                                                              }) => {
    return (
        <div className={styles.detail__content}>
            <div className={styles.detail__poster}>
                <img src={poster} alt=""/>
            </div>
            <div className={styles.detail__info}>
                <h1 className={styles.detail__title}>{title}{isFilm ? `, (${year})` : ''}</h1>
                <h5 className={styles.detail__subtitle}>{subtitle}</h5>
                {
                    isFilm && isFavourite !== undefined && toggler && (
                        <div className={styles.detail__buttons}>
                            <Link to={`/room/${kinopoiskId}`} state={{name: title}}><RedButton>Смотреть</RedButton></Link>
                            <FavouritesButton isFavourite={isFavourite} toggler={toggler}/>
                        </div>
                    )
                }
                <div className={styles.detail__about}>{isFilm ? 'О фильме' : 'О персоне'}</div>
                <div className={styles.detail__dataLines}>
                    {
                        lineTitles.map(({id, title, value, converter}) => (
                            <div className={styles.detail__dataLine} key={id}>
                                <div className={styles.detail__lineTitle}>
                                    {title}
                                </div>
                                <div className={styles.detail__lineInfo}>
                                    {value && getConvertedPropertyOrDash(findProperty(value), converter)}
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