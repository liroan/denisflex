import {Control, Controller, FieldValues} from "react-hook-form";
import {TextField} from "@mui/material";
import InputMask from "react-input-mask";
import {TypeField} from "../../../types/Login/TypeField";
import {FC} from "react";

interface TabsFieldContentProps {
    control: Control<FieldValues, any>;
    typeField?: TypeField;
}

const TabsFieldContent:FC<TabsFieldContentProps> = ({ control, typeField }) => {
    if (typeField === "number") {
        return <Controller
            name="number"
            control={control}
            render={({ field }) => (
                <InputMask
                    mask="+7 999 999 99 99"
                    alwaysShowMask
                    {...field}
                    maskPlaceholder={null}
                >
                    {(() => <TextField {...field}  id="outlined-basic" label="Телефон" variant="outlined" />) as any}
                </InputMask>
            )}
        />
    }
    return (
        <div><Controller
            name="email"
            control={control}
            render={({field}) => <TextField {...field} id="outlined-basic" label="Почта" variant="outlined"/>}
        /></div>
    )
}

export default TabsFieldContent;