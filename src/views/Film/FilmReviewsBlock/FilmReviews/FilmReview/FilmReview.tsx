import styles from "./FilmReview.module.scss";
import classNames from "classnames";
import parse from "html-react-parser";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import {FC, useMemo, useState} from "react";
import FilmReviewButton from "./FilmReviewButton/FilmReviewButton";
import {IReview, reviewType} from "../../../../../types/Reviews/IReview";


interface FilmReviewProps {
    review: IReview;
}

type IColors = {
    [key in reviewType]: string;
};

const colors: IColors = {
    "NEUTRAL": "#e1e1e1",
    "POSITIVE": "#ccffcc",
    "NEGATIVE": "#feb7b7",
}

const FilmReview: FC<FilmReviewProps> = ({
                                             review: {
                                                 negativeRating,
                                                 date, description, type, title, positiveRating
                                             }
                                         }) => {

    const [isFullText, setIsFullText] = useState(false);

    const buttonsData = useMemo(() => [
        {Icon: ThumbUpIcon, text: "Полезно", count: positiveRating},
        {Icon: ThumbDownIcon, text: "Не полезно", count: negativeRating}
    ], [negativeRating, positiveRating])

    const dateForShow = useMemo(() =>
            new Date(date).toLocaleString('ru-RU', {year: 'numeric', month: 'long', day: "numeric"}),
        [date])

    return (
        <div className={styles.review} style={{background: colors[type]}}>
            <h5 className={styles.review__title}>{title || "Аноним"}</h5>
            <p className={classNames(styles.review__text, {[styles.review__text_full]: isFullText})}>
                {parse(description)}
            </p>
            <div className={styles.review__allText}>
                {
                    isFullText ? (
                        <button onClick={() => setIsFullText(false)}>Скрыть рецензию</button>
                    ) : (
                        <button onClick={() => setIsFullText(true)}>Показать всю рецензию</button>
                    )
                }
            </div>
            <div className={styles.review__info}>
                <div className={styles.review__date}>{dateForShow}</div>
                <div className={styles.review__buttons}>
                    {buttonsData.map(buttonData => <FilmReviewButton {...buttonData} />)}
                </div>
            </div>
        </div>
    )
}

export default FilmReview;