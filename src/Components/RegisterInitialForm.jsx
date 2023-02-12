import React from 'react'
import '../Components/CSS File/RegIniForm.css'

const RegisterInitialForm = () => {
    return (
        <>
            <div className="initialReg">
                <div className="formBox">
                    <h2 className="title">Registration</h2>
                    <form>
                        <div className="inputBx">
                            <span>First Name</span>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Enter First Name"
                            />
                        </div>

                        <div className="inputBx">
                            <span>Last Name</span>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Enter Last Name"
                            />
                        </div>

                        <div className="inputBx">
                            <span>Username</span>
                            <input
                                type="text"
                                name="username"
                                placeholder="Set Username / ID"
                            />
                        </div>

                        <div className="inputBx">
                            <span>Password</span>
                            <input
                                type="password"
                                name=""
                                placeholder="Set Password"
                            />
                        </div>

                        <div className="inputBx">
                            <input type="submit" value="Register" name="" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterInitialForm
