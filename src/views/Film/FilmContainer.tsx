import {
    useGetBoxOfficeMovieByIdQuery,
    useGetDistributorsMovieByIdQuery,
    useGetMovieByIdQuery
} from "../../services/services";
import Film from "./Film";
import {useParams} from "react-router-dom";
import Preloader from "../../components/Preloader/Preloader";
import React from "react";
import ErrorScreen from "../../components/ErrorScreen/ErrorScreen";


const FilmContainer = () => {

    const { filmId } = useParams();
    const filmIdNumber = filmId ? +filmId : -1;

    const { data: movieData, isFetching: movieDataFetching, error } = useGetMovieByIdQuery(filmIdNumber);
    const { data: budget, isFetching: budgetFetching } = useGetBoxOfficeMovieByIdQuery(filmIdNumber);
    const { data: distributors, isFetching: distributorsFetching } = useGetDistributorsMovieByIdQuery(filmIdNumber);
    if (movieDataFetching || budgetFetching || distributorsFetching) return <Preloader />;
    if (error || !movieData || filmIdNumber === -1) return <ErrorScreen />
    return <Film movieData={movieData} budget={budget?.items} distributors={distributors?.items} filmId={filmIdNumber}/>
}

export default FilmContainer;