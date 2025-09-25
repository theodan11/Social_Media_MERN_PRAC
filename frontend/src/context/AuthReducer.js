export const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                isFetching: true
            }

        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false
            }
        case "LOGIN_FAILED":
            return {
                error: action.payload
            }

        case "LOGOUT":
            return {
                user: action.payload
            }

        case "UPDATE_START":
            return {
                isFetching: true
            }

        case "UPDATE_SUCCESS":
            return {
                user: action.payload
            }

        case "UPDATE_ERROR":
            return {
                error: action.payload
            }
    }
}