import React, { useState } from 'react'
import './ChangePassword.css'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

const ChangePassword = () => {
    const [state1, setstate1] = useState(false)
    const [state2, setstate2] = useState(false)
    const [state3, setstate3] = useState(false)

    const toggleBtn1 = () => {
        setstate1((prevState) => !prevState)
    }
    const toggleBtn2 = () => {
        setstate2((prevState) => !prevState)
    }
    const toggleBtn3 = () => {
        setstate3((prevState) => !prevState)
    }

    return (
        <>
            <div className="CP">
                <div className="card">
                    <div className="CPtitle">
                        <h2>Reset Password</h2>
                    </div>
                    <div className="CPbody">
                        <Form>
                            <FormGroup>
                                <Label for="current-password">
                                    Current Password
                                </Label>
                                <div className="ipic">
                                    <Input
                                        type={state1 ? 'text' : 'password'}
                                        name="current-password"
                                        id="currentPassword"
                                    />
                                    <span onClick={toggleBtn1}>
                                        {state1 ? (
                                            <VisibilityOffIcon />
                                        ) : (
                                            <VisibilityIcon />
                                        )}
                                    </span>
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <Label for="new-password">New Password</Label>
                                <div className="ipic">
                                    <Input
                                        type={state2 ? 'text' : 'password'}
                                        name="new-password"
                                        id="new-password"
                                        placeholder="Enter New-Password"
                                    />
                                    <span onClick={toggleBtn2}>
                                        {state2 ? (
                                            <VisibilityOffIcon />
                                        ) : (
                                            <VisibilityIcon />
                                        )}
                                    </span>
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <Label for="reenter-new-password">
                                    Re-Enter New Password
                                </Label>
                                <div className="ipic">
                                    <Input
                                        type={state3 ? 'text' : 'password'}
                                        name="reenter-new-password"
                                        id="reenter-new-password"
                                        placeholder="Re-Enter New Password"
                                    />
                                    <span onClick={toggleBtn3}>
                                        {state3 ? (
                                            <VisibilityOffIcon />
                                        ) : (
                                            <VisibilityIcon />
                                        )}
                                    </span>
                                </div>
                            </FormGroup>

                            <Button id="subbtn">Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangePassword
