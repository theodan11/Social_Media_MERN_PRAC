import React, { useRef } from 'react'
import './registerPage.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const RegisterPage = () => {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newUser = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value
        }
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/register`, newUser)
            // console.log(res)
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='registerPage'>
            <div className="registerContainer">
                <h1>theophil</h1>
                <form className="card signupCard" onSubmit={handleSubmit}>
                    <div className="title">
                        <h2>Create a new account</h2>
                        <p>It's quick and easy.</p>

                    </div>
                    {/* <div className="nameContainer ">
                        <div className="fname my-input">
                            <input type="text" placeholder='First name' />
                        </div>
                        <div className="sname my-input">
                            <input type="text" placeholder='Surname' />
                        </div>
                    </div> */}

                    <div className="emailInput my-input m-input-full">
                        <input type="text" placeholder='Username' ref={username} />
                    </div>
                    <div className="emailInput my-input m-input-full">
                        <input type="email" placeholder='Email address' ref={email} />
                    </div>
                    <div className="passwordInput my-input m-input-full">
                        <input type="password" placeholder='New password' ref={password} />
                    </div>

                    <div className="termsandcondition">
                        <p>People who use our service may have uploaded your contact information to Facebook. Learn more.</p>
                        <p>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>
                    </div>

                    <button className="m-btn create-btn s-btn" type='submit'>Sign up</button>
                    <Link to={'/login'}>
                        Already have an account?
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage