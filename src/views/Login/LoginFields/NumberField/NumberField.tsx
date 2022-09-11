

import {REQUIRED} from "../../../../constants";
import {TextField} from "@mui/material";
import {Control, Controller, FieldError, FieldErrorsImpl, FieldValues, Merge} from "react-hook-form";
import React, {FC} from "react";
import InputMask from "react-input-mask";

interface NumberFieldProps {
    control:  Control<any, any>;
    message:  string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

const NumberField:FC<NumberFieldProps> = ({ control, message }) => {
    return (
        <Controller
            name="number"
            control={control}
            rules={{
                required: REQUIRED,
                pattern: {
                    value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                    message: "Введите корректный номер телефона!"
                }
            }}
            render={({field}) => (
                <InputMask mask="+7 999 999 99 99" alwaysShowMask{...field} maskPlaceholder={undefined}>
                    {(() => <TextField {...field}
                                       id="outlined-basic"
                                       error={!!message}
                                       helperText={(message || "") as string}
                                       label="Телефон" variant="outlined"/>) as any}
                </InputMask>
            )}
        />
    )
}
export default NumberField;