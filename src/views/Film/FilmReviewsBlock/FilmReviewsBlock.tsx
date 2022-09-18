import styles from "./FilmReviewsBlock.module.scss";
import {RedButton, ScreensaverWrapper} from "../../../components";
import FilmReviews from "./FilmReviews/FilmReviews";
import FilmReviewsInfo from "./FilmReviewsInfo/FilmReviewsInfo";
import {FC, useEffect, useMemo, useState} from "react";
import {useGetReviewsMovieByIdQuery} from "../../../services/services";
import {IReview} from "../../../types/Reviews/IReview";


interface FilmReviewsBlockProps {
    filmId: number;
}

const FilmReviewsBlock:FC<FilmReviewsBlockProps> = ({ filmId }) => {

    const [page, setPage] = useState(1);
    const [allReviews, setAllReviews] = useState<IReview[]>([]);
    const { data: reviews, isFetching: reviewsLoading, error: reviewsError }
        = useGetReviewsMovieByIdQuery({ id: filmId, page });

    const totalPages = reviews?.totalPages;

    useEffect(() => {
        if (reviews) setAllReviews(prevState => [...prevState, ...reviews.items])
    }, [reviews])

    const reviewsData = useMemo(() => {
        if (reviews) {
            const {total, totalNegativeReviews, totalPositiveReviews, totalNeutralReviews } = reviews;
            return [total, totalPositiveReviews, totalNegativeReviews, totalNeutralReviews];
        }
    }, [reviews])

    console.log(allReviews.length)

    return (
        <ScreensaverWrapper error={reviewsError} isLoading={reviewsLoading} itemsLength={reviews?.items.length}>
            <div className={styles.reviewsBlock}>
                <h3 className={styles.reviewsBlock__title}>Рецензии кинокритиков</h3>
                <div className={styles.reviewsBlock__content}>
                    <FilmReviews reviews={allReviews} />
                    <FilmReviewsInfo counters={reviewsData!} />
                </div>
                {page !== totalPages && (
                    <div className={styles.reviewsBlock__showMore}>
                        <RedButton onClick={() => setPage(prevState => ++prevState)}>
                            Показать еще
                        </RedButton>
                    </div>
                )}
            </div>
        </ScreensaverWrapper>
    )
}

export default FilmReviewsBlock;