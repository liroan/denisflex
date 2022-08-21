import styles from "./Facts.module.scss";
import parse from "html-react-parser";
import React, {FC} from "react";
import {IFactOrError} from "../../types/types";
import useGetScreensaver from "../../hooks/useGetScreensaver";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";


interface FactsProps {
    facts?: Array<string | IFactOrError>;
    isLoading: boolean;
    error?: FetchBaseQueryError | SerializedError;
}

const Facts:FC<FactsProps> = ({ facts, isLoading, error }) => {
    const screensaver = useGetScreensaver(isLoading, error, facts)
    if (!facts) return <div>Факты отсутствуют.</div>
    return (
        <div className={styles.film__facts}>
            <h6 className={styles.film__factsTitle}>Знаете ли вы, что…</h6>
            {
                screensaver ? screensaver :
                facts.map((fact, i) => (
                    <p key={i} className={styles.film__fact}>
                        { typeof fact !== "string" ? parse(fact.text) : parse(fact) }
                    </p>
                ))
            }
        </div>
    )
}

export default Facts;