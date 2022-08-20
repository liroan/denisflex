import {
    useGetBoxOfficeMovieByIdQuery,
    useGetDistributorsMovieByIdQuery,
    useGetMovieByIdQuery
} from "../../services/services";
import Film from "./Film";
import {useParams} from "react-router-dom";


const FilmContainer = () => {

    const { filmId } = useParams();
    const filmIdNumber = filmId ? +filmId : -1;

    const { data: movieData, isFetching: movieDataFetching, error } = useGetMovieByIdQuery(filmIdNumber);
    const { data: budget, isFetching: budgetFetching } = useGetBoxOfficeMovieByIdQuery(filmIdNumber);
    const { data: distributors, isFetching: distributorsFetching } = useGetDistributorsMovieByIdQuery(filmIdNumber);
    if (movieDataFetching || budgetFetching || distributorsFetching) return <div>Загрузка</div>;
    if (error || !movieData || filmIdNumber === -1) return <div>Ошибка</div>
    return <Film movieData={movieData} budget={budget?.items} distributors={distributors?.items} filmId={filmIdNumber}/>
}

export default FilmContainer;