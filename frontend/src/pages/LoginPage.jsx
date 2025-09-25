import React, { useContext, useRef } from 'react'
import './loginPage.css'
import { AuthContext } from '../context/AuthContext'
import { LoginFailed, LoginStart, LoginSuccess } from '../context/AuthAction'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const { dispatch } = useContext(AuthContext)
    const navigate = useNavigate()
    // console.log(import.meta.env.VITE_BASE_URL)
    // console.log(import.meta.env);
    const email = useRef()
    const password = useRef()

    axios.defaults.withCredentials = true
    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(LoginStart())


        const user = {
            email: email.current.value,
            password: password.current.value
        }
        // console.log(user)
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/login`,
                user, {
                withCredentials: true
            }
            )
            // console.log(res)
            if (res.status == 200 && res.data != undefined) {
                dispatch(LoginSuccess(res.data))
                navigate('/')
            }
        } catch (error) {
            dispatch(LoginFailed(error))
        }
    }

    return (
        <div className='loginPage'>
            <div className="logoContainer">
                <h1>theophil</h1>
                <h2>theophil helps you connect and share<br></br> with the people in your life</h2>
            </div>
            <form className="loginForm card" onSubmit={handleSubmit}>
                <div className="inputCon">

                    <input type="text" placeholder='Email address or phone number' ref={email} />
                </div>
                <div className="inputCon">
                    <input type="password" placeholder='Password' ref={password} />

                </div>
                <button className='m-btn m-btn-primary ' id='login'>Log in</button>
                <p>Forgotten password?</p>
                <hr />
                <Link style={{ textDecoration: "none" }} className='linkCom' to={'/register'}>
                    <button type='submit' className='m-btn create-btn btn-log'>Create new account</button>
                </Link>
            </form>
        </div>
    )
}

export default LoginPage