import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {sendNumber, sendOTP} from "../../../../store/auth.slice";
import styles from "../../Login.module.scss";
import {RedButton} from "../../../../components";
import React from "react";
import FormError from "../../FormError/FormError";
import NumberField from "../../LoginFields/NumberField/NumberField";
import CodeField from "../../LoginFields/CodeField/CodeField";


const NumberAuthorization = () => {
    const { register, handleSubmit, watch,control, formState: { errors } } = useForm();
    const { error } = useAppSelector(state => state.auth);

    const dispatch = useAppDispatch();
    const currentStep = useAppSelector(state => state.auth.currentStep);
    const onSubmit = (data: any) => {
        if (currentStep === "number") dispatch(sendNumber(data.number))
        else dispatch(sendOTP(data.code))
    };

    return (
        <form className={styles.login__form} onSubmit={handleSubmit(onSubmit)}>
            { currentStep === "number" ?
                <NumberField control={control} message={errors.number?.message} /> :
                <CodeField control={control} message={errors.code?.message} />
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

export default NumberAuthorization;