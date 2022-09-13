import {RecaptchaVerifier, ConfirmationResult} from "firebase/auth";

export {};

declare global {

    interface Window {
        recaptchaVerifier: RecaptchaVerifier | null;
        confirmationResult:  ConfirmationResult;
    }
}