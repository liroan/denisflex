import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {sendNumber, sendOTP, setError, setStepMobileAuth} from "../../../../store/auth.slice";
import styles from "./SignInNumber.module.scss";
import mainStyles from "../../Login.module.scss";
import {RedButton} from "../../../../components";
import React, {useEffect} from "react";
import FormError from "../../FormError/FormError";
import NumberField from "../../LoginFields/NumberField/NumberField";
import CodeField from "../../LoginFields/CodeField/CodeField";
import {ISignInWithCode, ISignInWithPhone} from "../../../../types";
import classNames from "classnames";


const SignInNumber = () => {
    const {handleSubmit, control, formState: {errors}} = useForm<ISignInWithPhone | ISignInWithCode>();
    const {error, currentStepMobileAuth} = useAppSelector(state => state.auth);

    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<ISignInWithPhone | ISignInWithCode> = (data) => {
        if (currentStepMobileAuth === "number" && "number" in data) dispatch(sendNumber(data.number))
        else if ("code" in data) dispatch(sendOTP(data.code))
    };

    useEffect(() => {
        dispatch(setError(null))
    }, [currentStepMobileAuth])

    const backToInputPhone = () => dispatch(setStepMobileAuth("number"));

    const isPhoneStep = currentStepMobileAuth === "number";

    return (
        <>
            <form className={mainStyles.login__form} onSubmit={handleSubmit(onSubmit)}>
                {isPhoneStep ?
                    <NumberField control={control} message={"number" in errors ? errors.number?.message : undefined}/> :
                    <CodeField control={control} message={"code" in errors ? errors.code?.message : undefined}/>
                }
                <FormError error={error}/>
                <div className={mainStyles.login__buttons}>
                    <RedButton type="submit">
                        Войти
                    </RedButton>
                </div>
            </form>
            <div onClick={backToInputPhone}
                 className={classNames(styles.login__toPhone, {[styles.login__toPhone_hidden]: isPhoneStep})}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
                </svg>
            </div>
        </>
    )
}

export default SignInNumber;