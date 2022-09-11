import {TypeField} from "../../../types/Login/TypeField";
import React, {FC} from "react";
import EmailAuthorization from "./EmailAuthorization/EmailAuthorization";
import NumberAuthorization from "./NumberAuthorization/NumberAuthorization";

interface AuthorizationProps {
    typeField: TypeField;
    onReg: () => void;
}

const Authorization:FC<AuthorizationProps> = ({ typeField, onReg }) => {
    return typeField === "email" ? <EmailAuthorization onReg={onReg} /> : <NumberAuthorization />
}

export default Authorization;