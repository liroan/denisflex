import styles from "./Login.module.scss";
import {Container, OpacityButton, RedButton} from "../../components";
import {FormControlLabel, FormGroup, Switch, TextField} from "@mui/material";
import facebook from "../../assets/img/login/facebook.png"
import logo from "../../assets/img/header/logo.png"
import vk from "../../assets/img/login/vk.png"
import google from "../../assets/img/login/google.png"
import classNames from "classnames";
import {useState} from "react";
import Authorization from "./Authorization/Authorization";

const Login = () => {
    const [activeWay, setActiveWay] = useState<'phone' | 'email'>("email");
    return (
        <div className={styles.login}>
            <div className={styles.login__window}>
                <Container>
                    <div className={styles.login__logo}>
                        <img src={logo} alt=""/>
                    </div>
                    <p className={styles.login__info}>Войдите или зарегистрируйтесь</p>
                    <div className={styles.login__tabs}>
                        <button onClick={() => setActiveWay('email')}
                            className={classNames(styles.login__tab, {[styles.login__tab_active]: activeWay === "email"})}>Почта</button>
                        <button onClick={() => setActiveWay('phone')}
                            className={classNames(styles.login__tab, {[styles.login__tab_active]: activeWay === "phone"})}>Телефон</button>
                    </div>
                    <Authorization />
                    <p className={styles.login__additionalInfo}>Войди с помощью</p>
                    <div className={styles.login__networks}>
                        <div className={styles.login__network}><img src={facebook} alt=""/></div>
                        <div className={styles.login__network}><img src={vk} alt=""/></div>
                        <div className={styles.login__network}><img src={google} alt=""/></div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Login;