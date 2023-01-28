import React  from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './ViaCash.css'

const ViaCash=()=>{
    return (
            <>
                <div className="cash">
                    <div className="cashHeader">
                        <h2>Verify Cash Details</h2>
                    </div>
                    <div className="cashBody">
                        <div className="cashForm">                         
                            <Form>
                                    <FormGroup>
                                        <Label for="username">Username</Label>
                                        <Input type="text" name="username" id="username" placeholder="Enter Username" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleSelect">Select Program</Label>
                                        <Input type="select" name="select" id="program">
                                            <option>BCE</option>
                                            <option>BCT</option>
                                            <option>BCA</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleSelectSem">Select Semester</Label>
                                        <Input type="select" name="selectSem" id="exampleSelectSemester">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="billno.">Bill no.</Label>
                                        <Input type="text" name="billno." id="billnum" placeholder="Enter Bill Number" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleText">Text Area</Label>
                                        <Input type="textarea" name="text" id="exampleText" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleFile">File</Label>
                                        <Input type="file" name="file" id="exampleFile" />
                                    </FormGroup>
                                <div className="btn">                            
                                    <Button id='subbtn'>Submit</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </>
            )
}


export default ViaCash;