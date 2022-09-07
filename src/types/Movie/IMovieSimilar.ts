export interface IMovieSimilar {
    filmId: number;
    nameEn: string;
    nameOriginal: string;
    nameRu: string;
    posterUrl: string;
    posterUrlPreview: string;
    relationType: "SIMILAR"
}

export interface IMoviesSimilar {
    items: IMovieSimilar[];
    total: number;
}