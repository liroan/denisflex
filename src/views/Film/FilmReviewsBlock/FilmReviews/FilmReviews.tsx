import styles from "./FilmReviews.module.scss";
import FilmReview from "./FilmReview/FilmReview";
import {IReview} from "../../../../types/Reviews/IReview";
import {FC} from "react";

interface FilmReviewsProps {
    reviews: IReview[];
}

const FilmReviews:FC<FilmReviewsProps> = ({ reviews }) => {
    return (
        <div className={styles.reviewsBlock__reviews}>
            {
                reviews.map(review => <FilmReview review={review} />)
            }
        </div>
    )
}

export default FilmReviews;