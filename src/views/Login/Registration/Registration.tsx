import {useForm} from "react-hook-form";
import styles from "../Login.module.scss";
import {OpacityButton, RedButton} from "../../../components";
import {TypeField} from "../../../types/Login/TypeField";
import React, {FC} from "react";
import {registrationUser} from "../../../store/auth.slice";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import FormError from "../FormError/FormError";
import EmailField from "../LoginFields/EmailField/EmailField";
import PasswordField from "../LoginFields/PasswordField/PasswordField";

interface RegistrationProps {
    typeField: TypeField;
    onAuth: () => void;
}

const Registration:FC<RegistrationProps> = ({ typeField, onAuth }) => {
    const { register, handleSubmit, watch,control, formState: { errors } } = useForm();

    const { error } = useAppSelector(state => state.auth);

    const dispatch = useAppDispatch();
    const onSubmit = (data: any) => {
        dispatch(registrationUser({ email: data.email, password: data.password }))
    };
    console.log(errors)
    return (
        <form className={styles.login__form} onSubmit={handleSubmit(onSubmit)}>
            <EmailField control={control} message={errors.email?.message} />
            <PasswordField name="password" control={control} message={errors.password?.message} placeholder="Пароль" />
            <PasswordField name="repeatPassword" control={control} message={errors.repeatPassword?.message}
                           placeholder="Повторите пароль" />
            <FormError error={error} />
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