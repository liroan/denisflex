import styles from "./Login.module.scss";
import {Container} from "../../components";
import github from "../../assets/img/login/github.png"
import logo from "../../assets/img/header/logo.png"
import google from "../../assets/img/login/google.png"
import {useCallback, useEffect, useState} from "react";
import SignIn from "./SignIn/SignIn";
import {TypeSignIn} from "../../types/Login/TypeSignIn";
import SignUp from "./SignUp/SignUp";
import LoginTabs from "./LoginTabs/LoginTabs";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {authWithGithub, authWithGoogle, setError, setStepMobileAuth} from "../../store/auth.slice";
import LoginPreloader from "./LoginPreloader/LoginPreloader";

const Login = () => {
    const [typeSignIn, setTypeSignIn] = useState<TypeSignIn>("email");
    const [isRegistration, setIsRegistration] = useState(false);
    const {isLoading} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setError(null))
        dispatch(setStepMobileAuth("number"))
    }, [typeSignIn, isRegistration])

    const chooseSignIn = useCallback(() => {
        setIsRegistration(false)
    }, [])
    const chooseSignUp = useCallback(() => {
        setIsRegistration(true)
    }, [])

    const chooseEmail = useCallback(() => {
        setTypeSignIn('email')
    }, []);

    const chooseNumber = useCallback(() => {
        setTypeSignIn('number')
    }, [])

    return (
        <div className={styles.login}>
            <div className={styles.login__window}>
                {isLoading && <LoginPreloader/>}
                <Container>
                    <div className={styles.login__logo}>
                        <img src={logo} alt=""/>
                    </div>
                    <p className={styles.login__info}>Войдите или зарегистрируйтесь</p>
                    {!isRegistration && <LoginTabs typeSignIn={typeSignIn}
                                                   chooseNumber={chooseNumber}
                                                   chooseEmail={chooseEmail}/>}
                    {
                        isRegistration ?
                            <SignUp chooseSignIn={chooseSignIn}/> :
                            <SignIn typeSignIn={typeSignIn} chooseSignUp={chooseSignUp}/>
                    }
                    {
                        !isRegistration && typeSignIn === "email" && (
                            <div className={styles.login__forgot}>
                                <a title="Функция пока не реализована">Не помню</a>
                            </div>
                        )
                    }
                    <p className={styles.login__additionalInfo}>Войди с помощью</p>
                    <div className={styles.login__networks}>
                        <div className={styles.login__network} onClick={() => dispatch(authWithGithub())}><img
                            src={github} alt=""/></div>
                        <div className={styles.login__network} onClick={() => dispatch(authWithGoogle())}><img
                            src={google} alt=""/></div>
                    </div>
                    <div id="recaptcha-container"/>
                </Container>
            </div>
        </div>
    )
}

export default Login;