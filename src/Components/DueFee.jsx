import React  from 'react'
import './DueFee.css'
import { Form, FormGroup, Label, Input } from 'reactstrap';



const DueFee=()=> {
  
    // const toggle = () => {
    //     var blur = document.getElementById("blur");
    //     blur.classList.toggle("active");
    //     var popup = document.getElementById("popup");
    //     popup.classList.toggle("active");
    // }

    return (
        <>


<div className="contain" id="blur">
      <div className="content"></div>

            <div className="wholeBody">
                <div className="title">
                    <h1>Payment Details</h1>
                </div>
                <div className="mainBody">
                     <div className="leftDiv">   
                        <div className="card1">
                            <div className="inBox">
                                <h4>Fee for 6th semester: Rs 40,000.00</h4>
                            </div>
                            <div className="inBox">
                                <h4>Due Payment : Rs 30,000.00</h4>
                            </div>
                            <div className="inBox">
                                <h4>Due Payment : Rs 20,000.00</h4>
                            </div>
                            <div className="inBox">
                                <h4>Due Payment : Rs 15,000.00</h4>
                            </div>
                            <div className="inBox">
                                <h4>Due Payment : Rs 25,000.00</h4>
                            </div>
                        </div>
                    </div>
                    <div className="rightDiv">
                        <div className="card2">
                            <div className="c2Head">
                                <span>Select Payment Option</span>
                            </div>
                            <div className="c2Body">

                                <div className="selectDiv">
                                    {/* <Label for="exampleSelectOption">Select Option</Label> */}
                                    <Input type="select" name="selectStream" id="selectStream">
                                        <option>Fee for 6th semester: Rs 40,000.00</option>
                                        <option>Due Payment : Rs 30,000.00</option>
                                        <option>Due Payment : Rs 20,000.00</option>
                                        <option>Due Payment : Rs 15,000.00</option>
                                        <option>Due Payment : Rs 25,000.00</option>
                                        <option id='others'>Others</option>
                                    </Input>
                                </div>
                                <div className="remarkDiv">
                                    <Input type='text' name='remark' id='remark' placeholder='Remarks Here'></Input> 
                                </div>
                                <div className="displayDiv">
                                    <Input type='number' name='amount' id='amount' min='0' placeholder='Amount Here'></Input> 
                                </div>
                                <div className="paymentBtn">
                                    <button id='btn'  /*onClick={toggle}*/><span>Make Payment</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div> 

            {/* <div id="popup">
                <div  onClick= {toggle} className="pay">+</div>
                    <h2> Select Due Payment</h2>
                     <Form>
                        <FormGroup>
                            <Input type="select" name="selectSem" id="exampleSelectSemester">
                                <option>6th Sem 40000</option>
                                <option>Due 30000</option>
                                <option>Due 20000</option>
                                <option>Due 15000</option>
                                <option>Due 25000</option>
                                <option id='others'>Others</option>
                            </Input>
                        </FormGroup>
                     </Form>
                <button  onClick={toggle}>Pay</button>
            </div> */}
</div>
        </>
    )
  
}

export default DueFee;