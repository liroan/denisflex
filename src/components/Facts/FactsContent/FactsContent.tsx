import styles from "../Facts.module.scss";
import parse from "html-react-parser";
import React, {FC} from "react";
import {IFactOrError} from "../../../types/types";

interface FactsProps {
    facts: Array<string | IFactOrError>;
}

const FactsContent:FC<FactsProps> = ({ facts }) => {
    return (
        <>
        {
            facts.map((fact, i) => (
                <p key={i} className={styles.film__fact}>
                    {typeof fact !== "string" ? parse(fact.text) : parse(fact)}
                </p>
            ))
        }
        </>
    )

}

export default FactsContent;