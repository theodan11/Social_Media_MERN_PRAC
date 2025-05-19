export const LoginStart = (userCredential) => {
    return { type: "LOGIN_START" }
}

export const LoginSuccess = (user) => {
    return {
        type: "LOGIN_SUCCESS",
        payload: user
    }
}

export const LoginFailed = (error) => {

    return {
        type: "LOGIN_FAILED",
        payload: error
    }
}

export const LogoutUser = (user)=>{
    return {
        type: "LOGOUT",
        payload: null
    }
}