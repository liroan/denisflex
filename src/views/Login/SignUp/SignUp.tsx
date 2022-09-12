import {SubmitHandler, useForm} from "react-hook-form";
import styles from "../Login.module.scss";
import {OpacityButton, RedButton} from "../../../components";
import {TypeSignIn} from "../../../types/Login/TypeSignIn";
import React, {FC, useState} from "react";
import {registrationUser} from "../../../store/auth.slice";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import FormError from "../FormError/FormError";
import EmailField from "../LoginFields/EmailField/EmailField";
import PasswordField from "../LoginFields/PasswordField/PasswordField";
import {ISignUpData} from "../../../types";

interface RegistrationProps {
    chooseSignIn: () => void;
}

const SignUp:FC<RegistrationProps> = React.memo(({ chooseSignIn }) => {
    const { handleSubmit,control, formState: { errors }, getValues } = useForm<ISignUpData>();
    const [passwordsError, setPasswordsError] = useState<string>("");
    const { error } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    const isMatchedPasswords = () => {
        const password = getValues('password');
        const confirmPassword = getValues('repeatPassword');
        setPasswordsError(password !== confirmPassword ? "Пароли не совпадают" : "")
        return password === confirmPassword;
    }

    const onSubmit: SubmitHandler<ISignUpData> = ({ email, password }) => {
        if (!isMatchedPasswords()) return;
        dispatch(registrationUser({ email, password }))
    };

    return (
        <form className={styles.login__form} onSubmit={handleSubmit(onSubmit)}>
            <EmailField control={control} message={errors.email?.message} />
            <PasswordField name="password" control={control} message={errors.password?.message}
                           placeholder="Пароль" passwordsError={passwordsError} />
            <PasswordField name="repeatPassword" control={control} message={errors.repeatPassword?.message}
                           placeholder="Повторите пароль" passwordsError={passwordsError} />
            <FormError error={error} />
            <div className={styles.login__buttons}>
                <RedButton type="submit">
                    Зарегистрироваться
                </RedButton>
                <OpacityButton onClick={chooseSignIn} type="button">
                    Вход
                </OpacityButton>
            </div>
        </form>
    )
})

export default SignUp;