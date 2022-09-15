import classNames from "classnames";
import styles from "./FilmReviewButton.module.scss";
import {OverridableComponent} from "@mui/material/OverridableComponent";
import {SvgIconTypeMap} from "@mui/material";
import {FC} from "react";

interface FilmReviewButtonProps {
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {muiName: string};
    text: string;
    count: number;
}

const FilmReviewButton:FC<FilmReviewButtonProps> = ({ Icon,
                                                        count, text }) => {
    return (
        <button className={classNames(styles.review__button, styles.reviewButton)}>
            <span className={styles.reviewButton__icon}><Icon /></span>
            <span className={styles.reviewButton__text}>{text}</span>
            <span className={styles.reviewButton__counter}>{count}</span>
        </button>
    )
}

export default FilmReviewButton;