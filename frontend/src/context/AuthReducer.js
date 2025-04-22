export const AuthReducer =(state, action)=>{
    switch(action.type){
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
            return{
                error: action.payload
            }
    }
}