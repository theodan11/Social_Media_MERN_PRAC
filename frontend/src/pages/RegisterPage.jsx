import React from 'react'
import './registerPage.css'


const RegisterPage = () => {
    return (
        <div className='registerPage'>
            <div className="registerContainer">
                <h1>theophil</h1>
                <div className="card signupCard">
                    <div className="title">
                        <h2>Create a new account</h2>
                        <p>It's quick and easy.</p>

                    </div>
                    <div className="nameContainer ">
                        <div className="fname my-input">
                            <input type="text" placeholder='First name' />
                        </div>
                        <div className="sname my-input">
                            <input type="text" placeholder='Surname' />
                        </div>
                    </div>

                    <div className="emailInput my-input m-input-full">
                        <input type="email" placeholder='Email address' />
                    </div>
                    <div className="passwordInput my-input m-input-full">
                        <input type="password" placeholder='New password' />
                    </div>

                    <div className="termsandcondition">
                        <p>People who use our service may have uploaded your contact information to Facebook. Learn more.</p>
                        <p>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>
                    </div>

                    <button className="m-btn create-btn s-btn">Sign up</button>
                    <a href="#">Already have an account?</a>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage