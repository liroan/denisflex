import styles from "./FilmReviews.module.scss";
import FilmReview from "./FilmReview/FilmReview";


const FilmReviews = () => {
    return (
        <div className={styles.reviewsBlock__reviews}>
            <FilmReview />
            <FilmReview />
            <FilmReview />
        </div>
    )
}

export default FilmReviews;