import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import React, {FC} from "react";
import classNames from "classnames";
import styles from "./Select.module.scss";

interface SelectComponentProps {
    id:string;
    title: string;
    options: string[];
}

const SelectComponent:FC<SelectComponentProps> = ({ id, title, options }) => {
    const [value, setValue] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value as string);
    };

    return (
        <div className={classNames(styles.select)}>
            <FormControl fullWidth>
                <InputLabel id={id}>{title}</InputLabel>
                <Select
                    labelId={id}
                    value={value}
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