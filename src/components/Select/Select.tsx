import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import React, {Dispatch, FC, SetStateAction} from "react";
import classNames from "classnames";
import styles from "./Select.module.scss";

interface SelectComponentProps {
    id:string;
    title: string;
    options: string[];
    value: number;
    setValue: Dispatch<SetStateAction<number>>
}

const SelectComponent:FC<SelectComponentProps> = ({ id, title, options, value, setValue }) => {
    const handleChange = (event: SelectChangeEvent) => {
        setValue(+event.target.value);
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
                    { options.map((option, index) => <MenuItem value={index}>{option}</MenuItem>) }
                </Select>
            </FormControl>
        </div>
    )
}

export default SelectComponent;