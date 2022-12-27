import React from 'react';
import { Button, Form, FormGroup, Label, Input, CardHeader } from 'reactstrap';
import './RegForm.css';
import { Card,CardBody} from 'reactstrap';
import axios from 'axios';

const RegForm =()=>{

    const submitHandler=(event) =>{
        event.preventDefault();
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const username = event.target.username.value;
        const Password = event.target.Password.value;
        axios.post("",{
            firstName,
            lastName,
            username,
            Password
        })

        .then(response =>{
            console.log(response);
        })

        .catch(error => {
            console.log(error);
        }); 
        
    };


    return(
 <>    
     
        <div>
        <Card className='Card'>
            <CardHeader className='CardHeader'>
            <h1>Registration</h1>
            </CardHeader>
          <CardBody>
                <Form className='RegFormInfo' >
                    <div className="inputSection">    
                        <FormGroup  className="name">
                            <Label for="firstName">First Name</Label>
                            <Input type="text" name="firstName" id="firstName" placeholder="First Name" />
                            <Label for="lastName">Last Name</Label>
                            <Input type="text" name="lastName" id="lastName" placeholder="Last Name" />
                        </FormGroup>
    
                
                        {/* <FormGroup>
                            <Label for="setAddress">Address
                            <Input type="text" name="Address" id="Address" placeholder="Enter Address" /></Label>
                        </FormGroup> */}
                        {/* <FormGroup>
                            <Label for="Contact">Contact no.</Label>
                            <Input type="number" name="Contact" id="ContactInfo" placeholder="Enter Mobile Number" />
                        </FormGroup> */}
                        {/* <FormGroup>
                            <Label for="exampleSelect">Select Stream</Label>
                                <Input type="select" name="selectStream" id="selectStream">
                                <option>BCT - Bachelors in Computer Engineering</option>
                                <option>BCE - Bachelors in Civil Engineering</option>
                                <option>BCA - Bachelors of Computer Application</option>
                            </Input>
                        </FormGroup> */}
                        {/* <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email" />
                        </FormGroup> */}
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" id="setusername" placeholder="Set Username" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Password">Password</Label>
                            <Input type="text" name="setPassword" id="setPassword" placeholder="Set Password" />
                        </FormGroup>
                        
                        {/* <FormGroup>
                            <Label for="Contractfield">Contract Applied</Label>
                            <Input type="textarea" name="Contract" id="ContractField" />
                        </FormGroup> */}
                        {/* <FormGroup>
                            <Label for="exampleFile">File</Label>
                            <Input type="file" name="file" id="contractFile" />
                            <FormText color="muted">
                                This is some placeholder block-level help text for the above input.
                                It's a bit lighter and easily wraps to a new line.
                            </FormText>
                        </FormGroup> */}
                    </div>
                    <div className="sub-btn">       
                        <Button variant="primary" onSubmit={submitHandler}>Submit</Button>
                    </div> 
                     
                </Form>

        </CardBody>
        </Card>
      </div>
     
      </>
        )
};

export default RegForm;