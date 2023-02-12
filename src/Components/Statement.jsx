import React from 'react'
import './Statement.css'
import { Card, CardHeader, CardBody } from 'reactstrap'

const Statement = () => {
    return (
        <>
            <Card>
                <CardHeader>
                    <h1>Statement</h1>
                </CardHeader>

                <CardBody>
                    <div className="statm-card">
                        <div className="indiviStatmCard">
                            <div className="row">
                                <div className="col" id="col1">
                                    1st Semester Fee
                                </div>
                                <div className="col" id="col2">
                                    TRANS002
                                </div>
                                <div className="col" id="col3">
                                    2020-01-17
                                </div>
                                <div className="col" id="col4">
                                    Rs 40,000.00
                                </div>
                            </div>
                        </div>
                        <div className="indiviStatmCard">
                            <div className="row">
                                <div className="col" id="col1">
                                    2nd Semester Fee
                                </div>
                                <div className="col" id="col2">
                                    TRANS048
                                </div>
                                <div className="col" id="col3">
                                    2020-07-26
                                </div>
                                <div className="col" id="col4">
                                    Rs 40,000.00
                                </div>
                            </div>
                        </div>
                        <div className="indiviStatmCard">
                            <div className="row">
                                <div className="col" id="col1">
                                    3rd Semester Fee
                                </div>
                                <div className="col" id="col2">
                                    TRANS736
                                </div>
                                <div className="col" id="col3">
                                    2021-05-03
                                </div>
                                <div className="col" id="col4">
                                    Rs 40,000.00
                                </div>
                            </div>
                        </div>
                        <div className="indiviStatmCard">
                            <div className="row">
                                <div className="col" id="col1">
                                    4th Semester Fee
                                </div>
                                <div className="col" id="col2">
                                    TRANS170
                                </div>
                                <div className="col" id="col3">
                                    2021-12-04
                                </div>
                                <div className="col" id="col4">
                                    Rs 40,000.00
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

export default Statement
