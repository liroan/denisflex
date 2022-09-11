import styles from "../../Login.module.scss";
import {SubmitHandler, useForm} from "react-hook-form";
import {OpacityButton, RedButton} from "../../../../components";
import React, {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {authUser} from "../../../../store/auth.slice";
import FormError from "../../FormError/FormError";
import EmailField from "../../LoginFields/EmailField/EmailField";
import PasswordField from "../../LoginFields/PasswordField/PasswordField";
import {ISignInData} from "../../../../types";


interface EmailAuthorizationProps {
    chooseSignUp: () => void;
}

const SignInEmail:FC<EmailAuthorizationProps> = ({ chooseSignUp }) => {
    const { handleSubmit,control, formState: { errors } } = useForm<ISignInData>();
    const dispatch = useAppDispatch();
    const { error } = useAppSelector(state => state.auth);

    const onSubmit: SubmitHandler<ISignInData> = ({ email, password}) => {
        dispatch(authUser({ email, password }))
    };

    return (
        <form className={styles.login__form} onSubmit={handleSubmit(onSubmit)}>
            <EmailField control={control} message={errors.email?.message} />
            <PasswordField name="password" control={control} message={errors.password?.message} placeholder="Пароль" />
            <FormError error={error} />
            <div className={styles.login__buttons}>
                <RedButton type="submit">
                    Войти
                </RedButton>
                <OpacityButton onClick={chooseSignUp} type="button">
                    Регистрация
                </OpacityButton>
            </div>
        </form>
    )
}

export default SignInEmail;