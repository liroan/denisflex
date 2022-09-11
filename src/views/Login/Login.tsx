import styles from "./Login.module.scss";
import {Container} from "../../components";
import facebook from "../../assets/img/login/facebook.png"
import logo from "../../assets/img/header/logo.png"
import vk from "../../assets/img/login/vk.png"
import google from "../../assets/img/login/google.png"
import classNames from "classnames";
import {useEffect, useState} from "react";
import Authorization from "./Authorization/Authorization";
import {TypeField} from "../../types/Login/TypeField";
import Registration from "./Registration/Registration";
import {useAppSelector} from "../../hooks";
import {useNavigate} from "react-router-dom";
import {HTTPStatus} from "../../store/auth.slice";

const Login = () => {
    const [typeField, setTypeField] = useState<TypeField>("email");
    const [isRegistration, setIsRegistration] = useState(true);
    const { status, error } = useAppSelector(state => state.auth);
    const navigate = useNavigate();
    const onAuth = () => {
        setIsRegistration(false)
    }
    const onReg = () => {
        setIsRegistration(true)
    }

    useEffect(() => {
        if (status === HTTPStatus.SUCCESS)
            navigate('/');
    }, [status])

    return (
        <div className={styles.login}>
            <div className={styles.login__window}>
                <Container>
                    <div className={styles.login__logo}>
                        <img src={logo} alt=""/>
                    </div>
                    <p className={styles.login__info}>Войдите или зарегистрируйтесь</p>
                    { !isRegistration && (
                        <div className={styles.login__tabs}>
                            <button onClick={() => setTypeField('email')}
                                    className={classNames(styles.login__tab, {[styles.login__tab_active]: typeField === "email"})}>Почта
                            </button>
                            <button onClick={() => setTypeField('number')}
                                    className={classNames(styles.login__tab, {[styles.login__tab_active]: typeField === "number"})}>Телефон
                            </button>
                        </div>
                    )}
                    {
                        isRegistration ?
                            <Registration typeField={typeField} onAuth={onAuth}/> :
                            <Authorization typeField={typeField} onReg={onReg }/>
                    }
                    {
                        !isRegistration && typeField === "email" && <div className={styles.login__forgot}><a>Не помню</a></div>
                    }
                    <p className={styles.login__additionalInfo}>Войди с помощью</p>
                    <div className={styles.login__networks}>
                        <div className={styles.login__network}><img src={facebook} alt=""/></div>
                        <div className={styles.login__network}><img src={vk} alt=""/></div>
                        <div className={styles.login__network}><img src={google} alt=""/></div>
                    </div>
                    <div id="recaptcha-container"></div>
                </Container>
            </div>
        </div>
    )
}

export default Login;