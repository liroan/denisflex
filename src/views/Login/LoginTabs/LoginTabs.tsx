import styles from "./LoginTabs.module.scss";
import classNames from "classnames";
import React, {FC} from "react";

interface LoginTabsProps {
    typeSignIn: "email" | "number";
    chooseEmail: () => void;
    chooseNumber: () => void;
}

const LoginTabs: FC<LoginTabsProps> = React.memo(({typeSignIn, chooseEmail, chooseNumber}) => {
    return (
        <div className={styles.login__tabs}>
            <button onClick={chooseEmail}
                    className={classNames(styles.login__tab, {[styles.login__tab_active]: typeSignIn === "email"})}
            >
                Почта
            </button>
            <button onClick={chooseNumber}
                    className={classNames(styles.login__tab, {[styles.login__tab_active]: typeSignIn === "number"})}>
                Телефон
            </button>
        </div>
    )
})

export default LoginTabs;