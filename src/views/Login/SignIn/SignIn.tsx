import {TypeSignIn} from "../../../types/Login/TypeSignIn";
import React, {FC} from "react";
import SignInEmail from "./SignInEmail/SignInEmail";
import SignInNumber from "./SignInNumber/SignInNumber";

interface AuthorizationProps {
    typeSignIn: TypeSignIn;
    chooseSignUp: () => void;
}

const SignIn:FC<AuthorizationProps> = React.memo(({ typeSignIn, chooseSignUp }) => {
    return typeSignIn === "email" ? <SignInEmail chooseSignUp={chooseSignUp} /> : <SignInNumber />
})

export default SignIn;