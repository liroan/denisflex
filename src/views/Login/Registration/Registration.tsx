import {Controller, useForm} from "react-hook-form";
import styles from "../Login.module.scss";
import TabsFieldContent from "../TabsFieldContent/TabsFieldContent";
import {TextField} from "@mui/material";
import {OpacityButton, RedButton} from "../../../components";
import {TypeField} from "../../../types/Login/TypeField";
import React, {FC} from "react";

interface RegistrationProps {
    typeField: TypeField;
    onAuth: () => void;
}

const Registration:FC<RegistrationProps> = ({ typeField, onAuth }) => {
    const { register, handleSubmit, watch,control, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <form className={styles.login__form} onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="name"
                control={control}
                render={({ field }) => <TextField {...field} id="outlined-basic" label="Имя"
                                                  placeholder="Введите имя пользователя"
                                                  variant="outlined" />}
            />
            <TabsFieldContent control={control} typeField={typeField} />
            <Controller
                name="password"
                control={control}
                render={({ field }) => <TextField {...field} id="outlined-basic" label="Пароль" variant="outlined" />}
            />
            <Controller
                name="repeatPassword"
                control={control}
                render={({ field }) => <TextField {...field} id="outlined-basic" label="Пароль"
                                                  placeholder="Повторите пароль"
                                                  variant="outlined" />}
            />
            <div className={styles.login__buttons}>
                <RedButton type="submit">
                    Зарегистрироваться
                </RedButton>
                <OpacityButton onClick={onAuth} type="button">
                    Вход
                </OpacityButton>
            </div>
        </form>
    )
}

export default Registration;