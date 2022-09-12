import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY_FIREBASE,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID
};

export default getAuth(initializeApp(firebaseConfig));
export const provider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();