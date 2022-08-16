import classNames from "classnames";
import styles from "../../Catalog.module.scss";
import FormGroup from "@mui/material/FormGroup";
import {FormControlLabel, Switch} from "@mui/material";
import React, {Dispatch, FC, SetStateAction} from "react";
import {SortBy} from "../../../../store/filtersSlice";

const checkboxes: { id: number; label: string; sortType: SortBy }[] = [
    { id: 1, label: "по рейтингу", sortType: "RATING" },
    { id: 2, label: "по голосам", sortType: "NUM_VOTE" },
    { id: 3, label: "по дате выхода", sortType: "YEAR" },
]

interface CheckboxesProps {
    value: SortBy;
    onChange: (value: SortBy) => void;
}

const Checkboxes:FC<CheckboxesProps> = ({ value, onChange }) => {
    return (
        <div className={classNames(styles.filter__checkboxes)}>
            <FormGroup>
                {
                    checkboxes.map(({id, label, sortType}) => (
                        <FormControlLabel key={id}
                            control={<Switch checked={sortType === value}
                                             onChange={() => onChange(sortType)} />}
                                             label={label}
                        />
                    ))
                }
            </FormGroup>
        </div>
    )
}

export default Checkboxes;