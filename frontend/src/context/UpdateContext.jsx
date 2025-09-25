import { createContext, useEffect, useReducer } from "react"
import { UpdateReducer } from "./UpdateReducer"

const INITIALSTATE = {
    user: localStorage.getItem("user"),
    error: null,

}


export const UpdateContext = createContext(INITIALSTATE)



export const UpdateContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UpdateReducer, INITIALSTATE)

    useEffect(() => {
        localStorage.setItem("user", state.user)
    }, [state.user])

    return (
        <UpdateContext.Provider value={{ user: state.user, error: state.error, dispatch }}>
            {children}
        </UpdateContext.Provider>
    )
}