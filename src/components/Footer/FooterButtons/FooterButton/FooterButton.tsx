import styles from "./FooterButton.module.scss";
import React, {FC} from "react";

interface FooterButtonProps {
    icon: React.ReactNode;
    titleApp: string;
    titleUpload: string;
}

const FooterButton:FC<FooterButtonProps> = ({ icon, titleApp, titleUpload }) => {
    return (
        <div className={styles.footer__uploadButton}>
            <button>
                { icon }
                <span className={styles.footer__uploadButtonText}>
                    <span>{ titleUpload }</span>
                    <span>{ titleApp }</span>
                </span>
            </button>
        </div>
    )
}

export default FooterButton;