import {SelectComponent} from "../../../../../components";
import Accordion from "../../Accordion/Accordion";
import React, {FC} from "react";

const convertToNumber = (value: string) => +value;

interface GenresProps {
    genresNames: string[];
    genres: number;
    changeValue: (name: string) => (value: string | number) => void;
}

const Genres: FC<GenresProps> = React.memo(({genresNames, genres, changeValue}) => {
    return (
        <Accordion title="Жанры">
            <SelectComponent id="genres" title="Жанры"
                             options={genresNames}
                             value={genres}
                             changeValue={changeValue}
                             mutator={convertToNumber}
            />
        </Accordion>
    )
})

export default Genres;