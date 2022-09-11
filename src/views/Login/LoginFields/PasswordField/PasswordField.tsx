import {REQUIRED} from "../../../../constants";
import {TextField} from "@mui/material";
import {Control, Controller, FieldError, FieldErrorsImpl, FieldValues, Merge} from "react-hook-form";
import React, {FC} from "react";
import {getTextLengthError} from "../../../../utils";

interface PasswordFieldProps {
    name: string;
    control:  Control<FieldValues, any>;
    message:  string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
    placeholder: string;
}

const PasswordField:FC<PasswordFieldProps> = ({ name, control, message, placeholder }) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={{
                required: REQUIRED,
                minLength: { value: 6, message: getTextLengthError("пароля", 6, "не меньше") }
            }}
            render={({ field }) => (
                <TextField {...field} id="outlined-basic" label="Пароль" variant="outlined"
                           placeholder={placeholder}
                           error={!!message} helperText={(message || "") as string}
                />
            )}
        />
    )
}
export default PasswordField;