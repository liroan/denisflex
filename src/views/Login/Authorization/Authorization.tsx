import styles from "../Login.module.scss";
import {TextField} from "@mui/material";
import {OpacityButton, RedButton} from "../../../components";
import {useForm, Controller} from "react-hook-form";
import TabsFieldContent from "../TabsFieldContent/TabsFieldContent";
import {TypeField} from "../../../types/Login/TypeField";
import React, {FC} from "react";

interface AuthorizationProps {
    typeField: TypeField;
    onReg: () => void;
}

const Authorization:FC<AuthorizationProps> = ({ typeField, onReg }) => {
    const { register, handleSubmit, watch,control, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <form className={styles.login__form} onSubmit={handleSubmit(onSubmit)}>
            <TabsFieldContent control={control} typeField={typeField} />
            <Controller
                name="password"
                control={control}
                render={({ field }) => <TextField {...field} id="outlined-basic" label="Пароль" variant="outlined" />}
            />
            {/*<TextField id="outlined-basic" label="Email" variant="outlined" />*/}
            {/*<TextField id="outlined-basic" label="Password" variant="outlined" />*/}
            <div className={styles.login__buttons}>
                <RedButton type="submit">
                    Войти
                </RedButton>
                <OpacityButton onClick={onReg} type="button">
                    Регистрация
                </OpacityButton>
            </div>
        </form>
    )
}

export default Authorization;