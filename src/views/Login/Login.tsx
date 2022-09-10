import styles from "./Login.module.scss";
import {Container, OpacityButton, RedButton} from "../../components";
import {FormControlLabel, FormGroup, Switch, TextField} from "@mui/material";
import facebook from "../../assets/img/login/facebook.png"
import vk from "../../assets/img/login/vk.png"
import google from "../../assets/img/login/google.png"

const Login = () => {

    return (
        <div className={styles.login}>
            <div className={styles.login__mask}>
                <Container>
                    <h2 className={styles.login__title}>Регистрация</h2>
                    <div className={styles.login__networks}>
                        <div className={styles.login__network}>
                            <a href=""><img src={facebook} alt=""/></a>
                        </div>
                        <div className={styles.login__network}>
                            <a href=""><img src={vk} alt=""/></a>
                        </div>
                        <div className={styles.login__network}>
                            <a href=""><img src={google} alt=""/></a>
                        </div>
                    </div>
                    <form className={styles.login__form}>
                        <TextField id="standard-basic" label="Standard" variant="standard" sx={{ borderBottomColor: "red" }}/>
                        <TextField id="standard-basic" label="Standard" variant="standard" />
                        <TextField id="standard-basic" label="Standard" variant="standard" />
                        <TextField id="standard-basic" label="Standard" variant="standard" />
                        <FormGroup className={styles.login__checkbox}>
                            <FormControlLabel control={<Switch />}
                                              label="я согласен с политикой конфиденциальности" />
                        </FormGroup>
                        <div className={styles.login__buttons}>
                            <RedButton>Зарегистрироваться</RedButton>
                            <OpacityButton>Войти</OpacityButton>
                        </div>
                    </form>
                </Container>
            </div>
        </div>
    )
}

export default Login;