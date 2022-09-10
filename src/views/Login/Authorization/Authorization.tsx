import styles from "../Login.module.scss";
import {TextField} from "@mui/material";
import {OpacityButton, RedButton} from "../../../components";
import {useForm, Controller} from "react-hook-form";


const Authorization = () => {
    const { register, handleSubmit, watch,control, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <form className={styles.login__form} onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="email"
                control={control}
                render={({ field }) => <TextField {...field} id="outlined-basic" label="Почта" variant="outlined" />}
            />
            <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => <TextField {...field} id="outlined-basic" label="Телефон" variant="outlined" />}
            />
            <Controller
                name="password"
                control={control}
                render={({ field }) => <TextField {...field} id="outlined-basic" label="Пароль" variant="outlined" />}
            />
            {/*<TextField id="outlined-basic" label="Email" variant="outlined" />*/}
            {/*<TextField id="outlined-basic" label="Password" variant="outlined" />*/}
            <div className={styles.login__buttons}>
                <RedButton type="submit">
                    Войти
                </RedButton>
                <OpacityButton>
                    Регистрация
                </OpacityButton>
            </div>
        </form>
    )
}

export default Authorization;