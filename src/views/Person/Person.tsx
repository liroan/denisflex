


import styles from "../Film/Film.module.scss";
import Container from "../../components/Container/Container";
import React, {FC, useState} from "react";
import {
    useGetBoxOfficeMovieByIdQuery, useGetDistributorsMovieByIdQuery,
    useGetFactsAndErrorsMovieByIdQuery, useGetMovieByIdQuery, useGetPersonByIdQuery, useGetSimilarMovieByIdQuery,
    useGetStaffMovieByIdQuery
} from "../../services/services";
import HomeMovies from "../Home/HomeMovies/HomeMovies";
import {useParams} from "react-router-dom";
import {IBudget, ICountry, IDistributors, IGenre, IMovie, IPerson } from "../../types/types";
import DetailedContent from "../../components/DetailedContent/DetailedContent";
import {parseToDischargeNumber, TitleWithCount} from "../../utils/utils";
import FilmSwitcher from "../../components/Switcher/FilmSwitcher";
import {FilmCategory} from "../Film/Film";
import PersonSwitcherContent from "./PersonSwitcherContent/PersonSwitcherContent";



const lineTitles:{ id: number, title: string, value: keyof IPerson, converter?: ((value: any) => string | React.ReactNode)}[] = [
    { id: 1, title: "Карьера", value: "profession" },
    { id: 2, title: "Пол", value: "sex", converter: (sex: "MALE" | "FEMALE") => sex === "MALE" ? "Мужской" : "Женский" },
    { id: 3, title: "Рост", value: "growth", },
    { id: 4, title: "Дата рождения", value: "birthday", converter: (birthday: string) => new Date(birthday).toLocaleString('ru-RU', {year: 'numeric', month: 'long', day: "numeric"}) },
    { id: 5, title: "Дата смерти", value: "death", converter: (death: string) => new Date(death).toLocaleString('ru-RU', {year: 'numeric', month: 'long', day: "numeric"})},
    { id: 6, title: "Количество наград", value: "hasAwards" },
]

export enum PersonCategory {
    MOVIES,
    FACTS
}

const switcher = [
    { id: 1, title: "Факты", value: PersonCategory.FACTS },
]



const Person = () => {
    const { personId } = useParams();
    const personIdNumber = personId && +personId ? +personId : 0;


    const [activeCategory, setActiveCategory] = useState(PersonCategory.FACTS);
    const { data: personData, isLoading: personLoading, error: personError } = useGetPersonByIdQuery(personIdNumber);
    if (!personData) return <div>Загрузка...</div>
    console.log(personData)

    const findProperty = (key: keyof IPerson): typeof personData[keyof IPerson] => {
        return personData[key];
    }

    const { nameRu, nameEn, posterUrl } = personData;
    return (
        <div className={styles.film}>
            <Container>
                <Container>
                    <DetailedContent poster={posterUrl} title={nameRu || nameEn }
                                     subtitle={nameEn} findProperty={findProperty} lineTitles={lineTitles} />

                    <FilmSwitcher  activeCategory={activeCategory} switcher={switcher} setActiveCategory={setActiveCategory}/>

                    <PersonSwitcherContent  activeCategory={activeCategory} factsAndErrors={personData.facts} />
                </Container>
            </Container>
        </div>
    )
}

export default Person;