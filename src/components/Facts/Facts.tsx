import styles from "./Facts.module.scss";
import React, {FC} from "react";
import {IFactOrError} from "../../types/types";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {SerializedError} from "@reduxjs/toolkit";
import FactsContent from "./FactsContent/FactsContent";
import ScreensaverWrapper from "../ScreensaverWrapper/ScreensaverWrapper";


interface FactsProps {
    facts?: Array<string | IFactOrError>;
    isLoading: boolean;
    error?: FetchBaseQueryError | SerializedError;
}

const Facts:FC<FactsProps> = ({ facts, isLoading, error }) => {
    if (!facts) return <div>Факты отсутствуют.</div>
    return (
        <div className={styles.film__facts}>
            <h6 className={styles.film__factsTitle}>Знаете ли вы, что…</h6>
            <ScreensaverWrapper error={error} isLoading={isLoading} itemsLength={facts.length}>
                <FactsContent facts={facts} />
            </ScreensaverWrapper>
        </div>
    )
}

export default Facts;