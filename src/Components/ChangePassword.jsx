import React from 'react'
import './ChangePassword.css'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

const ChangePassword =()=> {
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
                                        <Label for="current-password">Current Password</Label>
                                        <Input type="password" name="current-password" id="current-password"  />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="new-password">New Password</Label>
                                        <Input type="password" name="new-password" id="new-password" placeholder="Enter new-password" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="reenter-new-password">Re-Enter New Password</Label>
                                        <Input type="password" name="reenter-new-password" id="reenter-new-password" placeholder="Re-Enter Username" />
                                    </FormGroup>            
                                                 
                                    <Button id='subbtn' >Submit</Button>
                                </Form>

                            </div>
                            
                            
                            </div>
</div>
                </>
        )

}


export default ChangePassword;
