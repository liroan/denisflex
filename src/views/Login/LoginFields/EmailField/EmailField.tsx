import {REQUIRED} from "../../../../constants";
import {TextField} from "@mui/material";
import {Control, Controller, FieldError, FieldErrorsImpl, FieldValues, Merge} from "react-hook-form";
import React, {FC} from "react";

interface EmailFieldProps {
    control:  Control<any, any>;
    message:  string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

const EmailField:FC<EmailFieldProps> = ({ control, message }) => {
    return (
        <Controller
            name="email"
            control={control}
            rules={{
                required: REQUIRED,
                pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Введите корректный адрес электронной почты!"
                }}
            }
            render={({field}) => (
                <TextField {...field} id="outlined-basic" label="Почта" error={!!message}
                           helperText={(message || "") as string} variant="outlined" />
            )}
        />
    )
}
export default EmailField;