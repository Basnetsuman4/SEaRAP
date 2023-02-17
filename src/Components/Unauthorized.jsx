import React from 'react'
import './Unauthorized.css'

export default function ForgotPswd() {
    return (
        <>
            <div className="body">
                <div className="FPbody">
                    <div className="FPBox">
                        <div className="formBox">
                            <div className="deniedimg">
                                <img
                                    src="https://img.freepik.com/premium-vector/access-denied-alert-vector-illustration-design_624938-543.jpg?w=2000"
                                    alt="access denied"
                                />
                                <p>You do not have permission to access this page.</p>
                            </div>
                            <div className="inputBx">
                                <input type="submit" value="GO BACK" name="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
