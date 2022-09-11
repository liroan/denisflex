import {RecaptchaVerifier, ConfirmationResult} from "firebase/auth";
import firebase from "firebase/compat";

export {};

declare global {

    interface Window {
        recaptchaVerifier: RecaptchaVerifier;
        confirmationResult:  ConfirmationResult;
    }
}