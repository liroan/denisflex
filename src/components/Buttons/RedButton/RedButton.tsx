import styles from "./RedButton.module.scss";
import {Button} from "@mui/material";
import React, {FC} from "react";

interface RedButtonProps {
    onClick?: () => void;
    startIcon?: React.ReactNode;
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined;
}

const RedButton: FC<RedButtonProps> = React.memo(({onClick, startIcon, type, children}) => {
    return (
        <div className={styles.redButton}>
            <Button variant="contained" startIcon={startIcon} onClick={onClick} type={type}>
                {children}
            </Button>
        </div>
    )
})


export default RedButton;