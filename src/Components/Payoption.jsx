import React from 'react';
import './Payoption.css';

const Payoption =()=>{
    return(
        <>
            <div className="body">
                <div className="optionCard">
                    <div className="cardHeader">
                        <h2>Make Payment</h2>
                    </div>
                    <div className="cardBody">
                        <div className="cash">
                            <button id='btn'>Via Cash</button>
                        </div>
                        <div className="voucher">
                            <button id='btn'>Voucher</button>
                        </div>
                        <div className="qr">
                            <button id='btn'>Via QR</button>
                        </div>
                        <div className="epay">
                            <button id='btn'>Via EPay</button>
                        </div>
                    </div>                    
                </div>
            </div>
        </>
    )
}

export default Payoption;