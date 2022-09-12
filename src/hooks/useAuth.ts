import {useAuthState} from "react-firebase-hooks/auth";
import auth from "../firebase.config";
import {useEffect} from "react";
import {setUserData} from "../store/auth.slice";
import {useAppDispatch} from "./reduxHooks";


const useAuth = () => {
    const [userData, authLoading] = useAuthState(auth);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setUserData({ email: userData?.email, number: userData?.phoneNumber }))
    }, [userData])
    return { userData, authLoading }
}

export default useAuth;