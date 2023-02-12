import React, { useState } from 'react'
import SERAlogo from './image/SERAlogo.svg'
import './
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

const Login = () => {
    const [state, setstate] = useState(false)
    const toggleBtn = () => {
        setstate((prevState) => !prevState)
    }
    return (
        <>
            <div className="box">
                <div className="logo">
                    <img src={SERAlogo} alt="Logo" />
                </div>

                <div className="loginBox">
                    <div className="formBox">
                        <h2>Login</h2>
                        <form>
                            <div className="inputBx">
                                <span>Username</span>
                                <input
                                    className="type"
                                    type="text"
                                    name="name"
                                    placeholder="Enter Username "
                                />
                            </div>
                            <div className="inputBx">
                                <span>Password</span>
                                <div className="pswd">
                                    <input
                                        className="type"
                                        type={state ? 'text' : 'password'}
                                        name=""
                                        placeholder="Enter Password"
                                    />
                                    <span onClick={toggleBtn}>
                                        {state ? (
                                            <VisibilityOffIcon />
                                        ) : (
                                            <VisibilityIcon />
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div className="remember">
                                {/* <label>
                            <input type="checkbox" name="" /> Remember me
                            </label> */}
                                <div className="dispalyMessage">
                                    <p> Yeta hal hai message</p>
                                </div>

                                <div className="inputBx">
                                    <input
                                        type="submit"
                                        value="Sign in"
                                        name=""
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
