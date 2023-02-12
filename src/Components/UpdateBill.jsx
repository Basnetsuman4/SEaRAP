import React from 'react'
import './
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    CardHeader,
    Card,
    CardBody,
} from 'reactstrap'

const UpdateBill = () => {
    const toggle = () => {
        var blur = document.getElementById('blur')
        blur.classList.toggle('active')
        var popup = document.getElementById('popup')
        popup.classList.toggle('active')
    }

    return (
        <>
            <div className="contain" id="blur">
                <div className="content">
                    <Card>
                        <CardHeader>
                            <h1>Billing</h1>
                        </CardHeader>

                        <CardBody>
                            <div className="statm-card">
                                <Form className="AccFormInfo">
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
                                                ></Input>

                                                <Input
                                                    type="text"
                                                    name="lastName"
                                                    id="lastName"
                                                />
                                            </div>
                                        </FormGroup>

                                        <FormGroup className="Identity">
                                            <Label for="username">
                                                Username
                                            </Label>
                                            <Input
                                                type="text"
                                                name="username"
                                                id="username"
                                            />
                                        </FormGroup>
                                        <FormGroup className="batch">
                                            <Label for="exampleBatch">
                                                Batch
                                            </Label>
                                            <Input
                                                type="text"
                                                name="batch"
                                                id="batch"
                                            />
                                            <Label for="examplesem">
                                                Semester
                                            </Label>
                                            <Input
                                                type="text"
                                                name="sem"
                                                id="sem"
                                            />
                                        </FormGroup>

                                        <FormGroup className="Contract">
                                            <Label for="dueFee">Due Fee</Label>
                                            <Input
                                                type="number"
                                                name="dueFee"
                                                id="dueFee"
                                                placeholder="Enter Due Fee "
                                                min="0"
                                            />
                                            <Label for="examplesem">
                                                Remark
                                            </Label>
                                            <Input
                                                type="text"
                                                name="sem"
                                                id="remark"
                                                placeholder="Enter Remark"
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
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div id="popup">
                <div onClick={toggle} className="close">
                    +
                </div>
                <h2> Form submitted successfully</h2>
                <p>Send email following the payment notice?</p>
                <button onClick={toggle}>Send Mail</button>
            </div>
        </>
    )
}

export default UpdateBill
