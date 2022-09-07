import {RangeSlider} from "../../../../../components";
import Accordion from "../../Accordion/Accordion";
import React, {FC} from "react";

interface YearsProps {
    changeValue: (name: string) => (value: string | number) => void;
    yearFrom: number;
    yearTo: number;
}

const Years:FC<YearsProps> = React.memo(({ changeValue, yearFrom, yearTo }) => {
    return (
        <Accordion title="Годы производства">
            <RangeSlider min={1900} max={2022}
                         idFirstField="yearFrom" idSecondField="yearTo"
                         fromValue={yearFrom} beforeValue={yearTo}
                         changeValue={changeValue}
            />
        </Accordion>
    )
})

export default Years;