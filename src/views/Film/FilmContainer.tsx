import {
    useGetBoxOfficeMovieByIdQuery,
    useGetDistributorsMovieByIdQuery,
    useGetMovieByIdQuery
} from "../../services/services";
import Film from "./Film";
import {useParams} from "react-router-dom";
import {Preloader, ErrorScreen} from "../../components";
import React from "react";


const FilmContainer = () => {

    const {filmId} = useParams();
    const filmIdNumber = Number(filmId);

    const {data: movieData, isFetching: movieDataFetching, error} = useGetMovieByIdQuery(filmIdNumber);
    const {data: budget, isFetching: budgetFetching} = useGetBoxOfficeMovieByIdQuery(filmIdNumber);
    const {data: distributors, isFetching: distributorsFetching} = useGetDistributorsMovieByIdQuery(filmIdNumber);
    if (movieDataFetching || budgetFetching || distributorsFetching) return <Preloader/>;
    if (error || !movieData) return <ErrorScreen/>
    return <Film movieData={movieData}
                 budget={budget?.items}
                 distributors={distributors?.items}
                 filmId={filmIdNumber}/>
}

export default FilmContainer;