import {REQUIRED} from "../../../../constants";
import {TextField} from "@mui/material";
import {Control, Controller, FieldError, FieldErrorsImpl, FieldValues, Merge} from "react-hook-form";
import React, {FC} from "react";
import InputMask from "react-input-mask";

interface CodeFieldProps {
    control:  Control<any, any>;
    message:  string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

const CodeField:FC<CodeFieldProps> = ({ control, message }) => {
    return (
        <div>
            <Controller
                name="code"
                control={control}
                rules={{
                    required: REQUIRED
                }}
                render={({field}) => (
                    <InputMask mask="9 9 9 9 9 9" alwaysShowMask{...field} maskPlaceholder={null}>
                        {(() => <TextField {...field} id="outlined-basic"
                                           error={!!message}
                                           helperText={(message || "") as string}
                                           label="Код" variant="outlined"/>) as any}
                    </InputMask>
                )}
            />
        </div>
    )
}
export default CodeField;