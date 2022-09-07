import {RangeSlider} from "../../../../../components";
import Accordion from "../../Accordion/Accordion";
import React, {FC} from "react";

interface RatingProps {
    changeValue: (name: string) => (value: string | number) => void;
    ratingFrom: number;
    ratingTo: number;
}

const Rating:FC<RatingProps> = React.memo(({ changeValue, ratingFrom, ratingTo }) => {
    return (
        <Accordion title="Рейтинг">
            <RangeSlider min={1} max={10}
                         idFirstField="ratingFrom" idSecondField="ratingTo"
                         fromValue={ratingFrom} beforeValue={ratingTo}
                         changeValue={changeValue}
            />
        </Accordion>
    )
})

export default Rating;