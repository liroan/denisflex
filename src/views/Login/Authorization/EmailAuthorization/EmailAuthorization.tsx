import styles from "../../Login.module.scss";
import {useForm} from "react-hook-form";
import {OpacityButton, RedButton} from "../../../../components";
import React, {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {authUser} from "../../../../store/auth.slice";
import FormError from "../../FormError/FormError";
import EmailField from "../../LoginFields/EmailField/EmailField";
import PasswordField from "../../LoginFields/PasswordField/PasswordField";


interface EmailAuthorizationProps {
    onReg: () => void;
}

const EmailAuthorization:FC<EmailAuthorizationProps> = ({ onReg }) => {
    const { register, handleSubmit, watch,control, formState: { errors } } = useForm();
    const dispatch = useAppDispatch();
    const { error } = useAppSelector(state => state.auth);

    const onSubmit = (data: any) => {
        dispatch(authUser({ email: data.email, password: data.password }))
    };
    console.log(errors)
    return (
        <form className={styles.login__form} onSubmit={handleSubmit(onSubmit)}>
            <EmailField control={control} message={errors.email?.message} />
            <PasswordField name="password" control={control} message={errors.password?.message} placeholder="Пароль" />
            <FormError error={error} />
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

export default EmailAuthorization;