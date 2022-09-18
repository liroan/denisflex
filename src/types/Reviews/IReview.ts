

export type reviewType = "NEUTRAL" | "POSITIVE" | "NEGATIVE";

export interface IReview {
    author: string;
    date: string;
    description: string
    kinopoiskId: number;
    negativeRating: number;
    positiveRating: number;
    title: string;
    type: reviewType;
}