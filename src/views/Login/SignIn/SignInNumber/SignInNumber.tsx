import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {sendNumber, sendOTP} from "../../../../store/auth.slice";
import styles from "../../Login.module.scss";
import {RedButton} from "../../../../components";
import React from "react";
import FormError from "../../FormError/FormError";
import NumberField from "../../LoginFields/NumberField/NumberField";
import CodeField from "../../LoginFields/CodeField/CodeField";
import {ISignInData, ISignInWithCode, ISignInWithPhone} from "../../../../types";


const SignInNumber = () => {
    const { handleSubmit,control, formState: { errors } } = useForm<ISignInWithPhone | ISignInWithCode>();
    const { error } = useAppSelector(state => state.auth);

    const dispatch = useAppDispatch();
    const currentStep = useAppSelector(state => state.auth.currentStep);

    const onSubmit: SubmitHandler<ISignInWithPhone | ISignInWithCode> = (data) => {
        if (currentStep === "number" && "number" in data) dispatch(sendNumber(data.number))
        else if ("code" in data) dispatch(sendOTP(data.code))
    };

    return (
        <form className={styles.login__form} onSubmit={handleSubmit(onSubmit)}>
            { currentStep === "number" ?
                <NumberField control={control} message={"number" in errors ? errors.number?.message : undefined} /> :
                <CodeField control={control} message={"code" in errors ? errors.code?.message : undefined} />
            }
            <FormError error={error} />
            <div className={styles.login__buttons}>
                <RedButton type="submit">
                    Войти
                </RedButton>
            </div>
        </form>
    )
}

export default SignInNumber;