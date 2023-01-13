import React from 'react';
import SERAlogo from './image/SERAlogo.svg'
import './Login.css'


const Login =()=>{
    return(
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
                            <input type="text" name="" placeholder='Enter Username / ID' />
                        </div>
                        <div className="inputBx">
                            <span>Password</span>
                            <input type="password" name="" placeholder='Enter Password' />
                        </div>
                        <div className="remember">
                            <label>
                            <input type="checkbox" name="" /> Remember me
                            </label>
                        <div className="inputBx">
                            <input type="submit" value="Sign in" name='' />                        </div>
                        </div>

                    </form>
                </div>
            </div>
        
        </div>
        </>
    )

}


export default  Login;