import {REQUIRED} from "../../../../constants";
import {TextField} from "@mui/material";
import {Control, Controller, FieldError, FieldErrorsImpl, FieldValues, Merge} from "react-hook-form";
import React, {FC, useState} from "react";
import {getTextLengthError} from "../../../../utils";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import styles from "./PasswordField.module.scss"

interface PasswordFieldProps {
    name: string;
    control:  Control<FieldValues, any>;
    message:  string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
    placeholder: string;
    passwordsError?: string;
}

const PasswordField:FC<PasswordFieldProps> = ({ name, control, passwordsError,
                                                  message, placeholder }) => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    return (
        <div className={styles.password}>
            <Controller
                name={name}
                control={control}
                rules={{
                    required: REQUIRED,
                    minLength: { value: 6, message: getTextLengthError("пароля", 6, "не меньше") }
                }}
                render={({ field }) => (
                    <TextField {...field} id="outlined-basic" label="Пароль" variant="outlined"
                               type={isShowPassword ? "text" : "password" }
                               placeholder={placeholder}
                               error={!!message || !!passwordsError} helperText={(message || passwordsError || "") as string}
                    />
                )}
            />
            {
                isShowPassword ?
                    <VisibilityOffIcon onClick={() => setIsShowPassword(false)} /> :
                    <RemoveRedEyeIcon onClick={() => setIsShowPassword(true)} />
            }
        </div>
    )
}
export default PasswordField;