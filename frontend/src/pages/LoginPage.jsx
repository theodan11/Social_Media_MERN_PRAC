import React from 'react'
import './loginPage.css'

const LoginPage = () => {
    return (
        <div className='loginPage'>
            <div className="logoContainer">
                <h1>theophil</h1>
                <h2>theophil helps you connect and share<br></br> with the people in your life</h2>
            </div>
            <div className="loginForm card">
                <div className="inputCon">

                    <input type="text" placeholder='Email address or phone number' />
                </div>
                <div className="inputCon">
                    <input type="password" placeholder='Password' />

                </div>
                <button className='m-btn m-btn-primary ' id='login'>Log in</button>
                <p>Forgotten password?</p>
                <hr />
                <button className='m-btn create-btn'>Create new account</button>
            </div>
        </div>
    )
}

export default LoginPage