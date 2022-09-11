

export interface ISignInData {
    email: string;
    password: string;
}

export interface ISignUpData extends ISignInData {
    repeatPassword: string;
}

export interface ISignInWithPhone extends ISignInData {
    number: string;
}

export interface ISignInWithCode extends ISignInData {
    code: string;
}