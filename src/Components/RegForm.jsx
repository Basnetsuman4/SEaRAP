import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, CardHeader, Card, CardBody } from 'reactstrap'
import './CSS File/RegForm.css'
import { useFormik } from 'formik'

const validate = (values) => {
    const errors = {}

    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Valid Email'
    } else if (!values.email) {
        errors.email = 'Email Required'
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address'
    }

    return errors
}

const RegForm = () => {
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
        var blur = document.getElementById('blur')
        blur.classList.toggle('active')
        var popup = document.getElementById('popup')
        popup.classList.toggle('active')
    }

    const [telephone, setTelephone] = useState('')
    const [error, setError] = useState('')

    const handleChange = (event) => {
        const inputValue = event.target.value
        const telephoneRegex = /^\d{10}$/

        if (!telephoneRegex.test(inputValue)) {
            setError('Please enter a valid 10-digit telephone number')
        } else {
            setError('')
        }

        setTelephone(inputValue)
    }
    return (
        <>
            <div className="contain" id="blur">
                <div className="content">
                    <div>
                        <Card className="Card">
                            <CardHeader className="CardHeader">
                                <h1>Registration</h1>
                            </CardHeader>

                            <CardBody>
                                <Form className="RegFormInfo">
                                    <div className="inputSection">
                                        <FormGroup className="name">
                                            <Label for="FullName">
                                                Full Name
                                            </Label>
                                            <div className="naming">
                                                <Input
                                                    type="text"
                                                    name="firstName"
                                                    id="firstName"
                                                    placeholder="First Name"
                                                />
                                                <Input
                                                    type="text"
                                                    name="MiddleName"
                                                    id="middleName"
                                                    placeholder="Middle Name"
                                                />
                                                <Input
                                                    type="text"
                                                    name="lastName"
                                                    id="lastName"
                                                    placeholder="Last Name"
                                                />
                                            </div>
                                        </FormGroup>

                                        <FormGroup className="email">
                                            <Label for="exampleEmail">
                                                Email
                                            </Label>
                                            <Input
                                                type="email"
                                                id="Email"
                                                name="email"
                                                autoComplete="off"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.email}
                                                placeholder="Enter Email"
                                            />
                                            <br />
                                            {formik.touched.email &&
                                                formik.errors.email && (
                                                    <span>
                                                        {formik.errors.email}
                                                    </span>
                                                )}
                                        </FormGroup>

                                        <FormGroup className="contact">
                                            <div>
                                                <Label htmlFor="telephone">
                                                    Contact no.{' '}
                                                </Label>
                                                <Input
                                                    type="num"
                                                    id="telephone"
                                                    name="telephone"
                                                    value={telephone}
                                                    onChange={handleChange}
                                                />
                                                {error && (
                                                    <p style={{ color: 'red' }}>
                                                        {error}
                                                    </p>
                                                )}
                                            </div>
                                        </FormGroup>

                                        <FormGroup className="dob">
                                            <Label for="dob">
                                                Date of Birth:
                                            </Label>
                                            <Input type="date" id="date" />
                                        </FormGroup>

                                        <FormGroup className="address">
                                            <Label for="setAddress">
                                                Address
                                            </Label>
                                            <Input
                                                type="text"
                                                name="Address"
                                                id="Address"
                                                placeholder="Enter Address"
                                            />
                                        </FormGroup>

                                        <FormGroup className="stream">
                                            <Label for="exampleSelect">
                                                Stream
                                            </Label>
                                            <Input
                                                type="select"
                                                name="selectStream"
                                                id="selectStream"
                                            >
                                                <option>
                                                    BCT - Bachelors in Computer
                                                    Engineering
                                                </option>
                                                <option>
                                                    BCE - Bachelors in Civil
                                                    Engineering
                                                </option>
                                                <option>
                                                    BCA - Bachelors of Computer
                                                    Application
                                                </option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup className="batch">
                                            <Label for="exampleBatch">
                                                Batch
                                            </Label>
                                            <Input
                                                type="text"
                                                name="batch"
                                                id="batch"
                                                placeholder="Enter Batch"
                                            />
                                        </FormGroup>

                                        <FormGroup className="setIdentity">
                                            <Label for="username">
                                                Username
                                            </Label>
                                            <Input
                                                type="text"
                                                name="username"
                                                id="setusername"
                                                autoComplete="off"
                                                placeholder="Set Username"
                                            />
                                            <Label for="Password">
                                                Password
                                            </Label>
                                            <Input
                                                type="text"
                                                name="setPassword"
                                                id="setPassword"
                                                autoComplete="off"
                                                placeholder="Set Password"
                                            />
                                        </FormGroup>

                                        <FormGroup className="Contract">
                                            <Label for="totalfee">
                                                Total Fee
                                            </Label>
                                            <Input
                                                type="number"
                                                name="totalfee"
                                                id="Totalfee"
                                                placeholder="Enter Total Fee "
                                                min="400000"
                                            />
                                            <br />
                                            <Label for="Contractfield">
                                                Contract Applied
                                            </Label>
                                            <Input
                                                type="textarea"
                                                name="Contract"
                                                id="ContractField"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleFile">
                                                Image
                                            </Label>
                                            <Input
                                                type="file"
                                                name="image"
                                                id="defaultPicture"
                                            />
                                        </FormGroup>
                                    </div>
                                    <div className="sub-btn">
                                        <Button
                                            variant="primary"
                                            onClick={toggle}
                                        >
                                            Submit
                                        </Button>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>

            <div id="popup">
                <div onClick={toggle} className="close">
                    +
                </div>
                <h2> Form submitted successfully</h2>
                <p>Do check for further changes.</p>
                <button onClick={toggle}>Close</button>
            </div>
        </>
    )
}

export default RegForm
