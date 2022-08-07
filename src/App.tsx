import React from 'react';
import * as queryString from "query-string";
import {Link, Route, Routes} from 'react-router-dom';
import FilterTest from './views/FIlterTest/FIlterTest';
import {useAppDispatch} from "./hooks/hooks";
import {changeFiltersFromUrl, changeFiltersHandle} from "./store/filtersSlice";
import FilmTest from "./views/FIlterTest/FilmTest";

function App() {
    // console.log(window.location.search)
    // const stringified = queryString.parse(window.location.search.substring(1));
    // console.log(stringified)stringified
    const dispatch = useAppDispatch();
    return (
        <div>
            <button onClick={() => dispatch(changeFiltersFromUrl({keyword: "игра", type:"FILM"  }))}>
                <Link to='/filter'>Посмотреть все с именем "игра"</Link>
            </button>
            <Routes>
                <Route path="/" element={<div><Link to='/filter'>перейти на фильтры</Link></div>} />
                <Route path="/filter" element={<FilterTest />} />
                <Route path="/film" element={<FilmTest />} />
            </Routes>
        </div>
    )
}

export default App;
