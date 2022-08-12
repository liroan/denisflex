import React, {FC, useState} from "react";
import classNames from "classnames";
import styles from "./Accordion.module.scss";


interface AccordionProps {
    title: string;
    children: React.ReactNode;
}

const Accordion:FC<AccordionProps> = ({ title, children }) => {

    const [isShow, setIsShow] = useState(true);

    return (
        <div className={classNames(styles.filter__accordion, styles.accordion)}>
            <div className={styles.accordion__title}>
                <h6>{ title }</h6>
                <div className={classNames(styles.accordion__arrow, { [styles.accordion__arrow_rotate]: isShow })}
                     onClick={() => setIsShow(prevState => !prevState)}>
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
            </div>
            { isShow && children }
        </div>
    )
}

export default Accordion;