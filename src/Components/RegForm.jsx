import React from 'react';
import { Button, Form, FormGroup, Label, Input, CardHeader } from 'reactstrap';
import './RegForm.css';
import { Card,CardBody} from 'reactstrap';
import { useFormik } from 'formik'

const validate = (values) => {
    const errors = {}
  
    if (!values.email) {
      errors.email = 'Email Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
  
    return errors
  }

const RegForm =()=>{

    const formik = useFormik({
        initialValues: {
          email: '',
        },
        validate,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2))
        },
      })  


    const toggle = () => {
    var blur = document.getElementById("blur");
    blur.classList.toggle("active");
    var popup = document.getElementById("popup");
    popup.classList.toggle("active");
}
    return(
 <>   

<div className="contain" id="blur">
      <div className="content">

     
        <div>
        <Card className='Card'>
            <CardHeader className='CardHeader'>
            <h1>Registration</h1>
            </CardHeader>
     
        <CardBody>
            <Form className='RegFormInfo' >
                <div className="inputSection">    
                    <FormGroup  className="name">
                        <Label for="FullName">Full Name</Label>
                        <div className='naming'>    
                            <Input type="text" name="firstName" id="firstName" placeholder="First Name" />
                            <Input type="text" name="MiddleName" id="MiddleName" placeholder="Middle Name" />
                            <Input type="text" name="lastName" id="lastName" placeholder="Last Name" />
                        </div>
                    </FormGroup>           

                    <FormGroup className='email'>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email"  name="email" id="Email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} placeholder="Enter Email" /><br/>
                        {formik.touched.email && formik.errors.email && (
                            <span>{formik.errors.email}</span>
                        )}
                    </FormGroup>

                    <FormGroup className='contact'>
                        <Label for="Contact">Contact no.</Label>
                        <Input type="tel" name="Contact" id="ContactInfo" placeholder="Enter Mobile Number" />
                    </FormGroup>

                <FormGroup className='dob'>                   
                    <Label for="dob">Date of Birth:</Label>
                        <Input type="date" id="date"/>
                    </FormGroup>

                    <FormGroup className='address'>
                        <Label for="setAddress">Address</Label>
                        <Input type="email" name="Address" id="Address" placeholder="Enter Address" />
                    </FormGroup>

                    <FormGroup className='stream'>
                        <Label for="exampleSelect">Stream</Label>
                            <Input type="select" name="selectStream" id="selectStream">
                                <option>BCT - Bachelors in Computer Engineering</option>
                                <option>BCE - Bachelors in Civil Engineering</option>
                                <option>BCA - Bachelors of Computer Application</option>
                            </Input>
                    </FormGroup>

                    <FormGroup className='setIdentity'>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" id="setusername" placeholder="Set Username" />
                        <Label for="Password">Password</Label>
                        <Input type="text" name="setPassword" id="setPassword" placeholder="Set Password" />
                    </FormGroup>
                    
                    <FormGroup className='Contract'>
                        <Label for="totalfee">Total Fee</Label>
                        <Input type="number" name="totalfee" id="Totalfee" placeholder="Enter Total Fee" /><br/>
                        <Label for="Contractfield">Contract Applied</Label>
                        <Input type="textarea" name="Contract" id="ContractField" />
                    </FormGroup>
                    {/* <FormGroup>
                        <Label for="exampleFile">File</Label>
                        <Input type="file" name="file" id="contractFile" />
                    </FormGroup> */}
                </div>
                <div className="sub-btn">       
                    <Button variant="primary" onClick={toggle}>Submit</Button>
                </div> 
                
            </Form>

        </CardBody>
     
             
        </Card>
    </div>
    </div>
    </div>

    <div id="popup">
        <div  onClick= {toggle} className="close">+</div>
        <h2> Form submitted successfully</h2>
        <p>
            Do check for further changes.
        </p>
        <button  onClick={toggle}>Close</button>
    </div>
      </>
        )
};

export default RegForm;