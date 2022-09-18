import React, {FC} from "react";
import styles from "./FormError.module.scss";

interface FormErrorProps {
    error?: null | string;
}

const FormError: FC<FormErrorProps> = React.memo(({error}) => {
    if (error) return (
        <div className={styles.error}>
            {error}
        </div>
    )
    return <></>
})

export default FormError;