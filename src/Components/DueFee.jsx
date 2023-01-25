import React  from 'react'
import './DueFee.css'

const DueFee=()=> {
  
    return (
        <>
            <div className="wholeBody">
                <div className="title">
                    <h1>Payment Details</h1>
                </div>
                <div className="card">
                    <div className="inBox">
                        <h4>Payment for 6th semester</h4>
                    </div>
                    <div className="inBox">
                        <h4>Due Payment : Rs 40,000.00</h4>
                    </div>
                    <div className="paymentBtn">
                        <button id='btn'><span>Make Payment</span></button>
                    </div>
                </div>

            </div>              
        </>
    )
  
}

export default DueFee;