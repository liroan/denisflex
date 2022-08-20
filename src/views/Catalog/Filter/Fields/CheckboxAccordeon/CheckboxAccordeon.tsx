import Checkboxes from "../../Checkboxes/Checkboxes";
import Accordion from "../../Accordion/Accordion";
import React, {FC} from "react";
import {SortBy} from "../../../../../store/filtersSlice";

interface CheckboxAccordionProps {
    order: SortBy;
    changeValue: (name: string) => (value: string | number) => void;
}

const CheckboxAccordion:FC<CheckboxAccordionProps> = React.memo(({ order, changeValue  }) => {
    return (
        <Accordion title="Сортировка">
            <Checkboxes value={order} name="order"  changeValue={changeValue} />
        </Accordion>
    )
})

export default CheckboxAccordion;