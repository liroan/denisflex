import {SelectComponent} from "../../../../../components";
import Accordion from "../../Accordion/Accordion";
import React, {FC} from "react";
import {MovieTypeFilter} from "../../Filter";
import {MovieType} from "../../../../../types";

const convertToMovieType = (value: string) => MovieTypeFilter[+value];

interface TypeProps {
    type: MovieType;
    types: string[];
    changeValue: (name: string) => (value: string | number) => void;
}

const Type: FC<TypeProps> = React.memo(({type, types, changeValue}) => {
    return (
        <Accordion title="Тип произведения">
            <SelectComponent id="type" title="Тип произведения"
                             options={types}
                             value={MovieTypeFilter.indexOf(type)}
                             changeValue={changeValue}
                             mutator={convertToMovieType}
            />
        </Accordion>
    )
})

export default Type;