import {IReview} from "./IReview";


export interface IReviewsResponse {
    items: IReview[];
    total: number;
    totalNegativeReviews: number;
    totalNeutralReviews: number;
    totalPages: number
    totalPositiveReviews: number;
}