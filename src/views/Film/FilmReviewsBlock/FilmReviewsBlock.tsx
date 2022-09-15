import styles from "./FilmReviewsBlock.module.scss";
import {RedButton} from "../../../components";
import FilmReviews from "./FilmReviews/FilmReviews";
import FilmReviewsInfo from "./FilmReviewsInfo/FilmReviewsInfo";


const FilmReviewsBlock = () => {
    return (
        <div className={styles.reviewsBlock}>
            <h3 className={styles.reviewsBlock__title}>Рецензии кинокритиков</h3>
            <div className={styles.reviewsBlock__content}>
                <FilmReviews />
                <FilmReviewsInfo />
            </div>
            <div className={styles.reviewsBlock__showMore}>
                <RedButton>
                    Показать еще
                </RedButton>
            </div>
        </div>
    )
}

export default FilmReviewsBlock;