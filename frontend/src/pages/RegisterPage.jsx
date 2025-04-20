import React from 'react'
import './registerPage.css'


const RegisterPage = () => {
    return (
        <div className='registerPage'>
            <div className="registerContainer">
                <h1>theophil</h1>
                <div className="card">
                    <div className="title">
                        <h2>Create a new account</h2>
                        <p>It's quick and easy.</p>

                    </div>
                        <div className="nameContainer">
                            <div className="fname">
                                <input type="text" placeholder='First name'/>
                            </div>
                            <div className="sname">
                                <input type="text" placeholder='Surname'/>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage