import React from 'react'
import './

export default function ForgotPswd() {
    return (
        <>
            <div className="body">
                <div className="FPbody">
                    <div className="FPBox">
                        <div className="formBox">
                            <h2>Forgot Password?</h2>
                            <div>
                                <p>
                                    Please enter the valid email address linked
                                    to your account, and we'll send you
                                    instruction for resetting your password.
                                </p>
                            </div>
                            <span>Email Address:</span>
                            <input
                                className="forAddress"
                                placeholder="example00@gmail.com"
                            />
                            <div className="inputBx">
                                <input
                                    type="submit"
                                    value="Send Email"
                                    name=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
