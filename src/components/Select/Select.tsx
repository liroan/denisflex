import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import React, {FC} from "react";
import classNames from "classnames";
import styles from "./Select.module.scss";

interface SelectComponentProps {
    id: string;
    title: string;
    options: string[];
    value: number | string;
    changeValue: (name: string) => (value: string | number) => void;
    mutator: (value: string) => number | string;
}

const SelectComponent: FC<SelectComponentProps> = React.memo(({id, title, options, value, changeValue, mutator}) => {

    const setValue = changeValue(id);

    const handleChange = (event: SelectChangeEvent) => {
        setValue(mutator(event.target.value));
    };

    return (
        <div className={classNames(styles.select)}>
            <FormControl fullWidth>
                <InputLabel id={id}>{title}</InputLabel>
                <Select
                    labelId={id}
                    value={String(value)}
                    label={title}
                    onChange={handleChange}
                >
                    {options.map((option, index) => <MenuItem value={index} key={index}>{option}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    )
})

export default SelectComponent;