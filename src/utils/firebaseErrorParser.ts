
const popularCodeErrors: any = {
    "/wrong-password": "Неверный логин или пароль!",
    "/user-not-found": "Неверный логин или пароль!",
    "/email-already-in-use": "Данный пользователь уже зарегистрирован!",
    "/invalid-phone-number": "Данный номер телефона недоступен!",
    "/invalid-verification-code": "Вы ввели некорректный код доступа!"
}

const firebaseErrorParser = (error: string): string => {
    const errorCode = error.match(/(\/)([^\)]+)/)
    return errorCode ? popularCodeErrors[errorCode[0]] : error;
}

export default firebaseErrorParser;