import React from 'react'
import { Table, CardHeader, Input } from 'reactstrap'
import './RegForm.css'
import { Card, CardBody } from 'reactstrap'

const ResultForm = () => {
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
                    <div>
                        <Card className="Card">
                            <CardHeader className="CardHeader">
                                <h1>Add Results</h1>
                            </CardHeader>

                            <CardBody>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Subject</th>
                                            <th>Total Mark</th>
                                            <th>Pass Mark</th>
                                            <th>Obtained Mark</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>OOAD </td>
                                            <td>80</td>
                                            <td>32</td>
                                            <td>
                                                <Input></Input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>
                                                OOAD <b>PRACTICAL</b>
                                            </td>
                                            <td>20</td>
                                            <td>8</td>
                                            <td>
                                                <Input></Input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>OS </td>
                                            <td>80</td>
                                            <td>32</td>
                                            <td>
                                                <Input></Input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>
                                                OS <b>PRACTICAL</b>
                                            </td>
                                            <td>20</td>
                                            <td>8</td>
                                            <td>
                                                <Input></Input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>DB </td>
                                            <td>80</td>
                                            <td>32</td>
                                            <td>
                                                <Input></Input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>
                                                DB <b>PRACTICAL</b>
                                            </td>
                                            <td>20</td>
                                            <td>8</td>
                                            <td>
                                                <Input></Input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">7</th>
                                            <td>Economics </td>
                                            <td>80</td>
                                            <td>32</td>
                                            <td>
                                                <Input></Input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">8</th>
                                            <td>
                                                Economics <b>PRACTICAL</b>
                                            </td>
                                            <td>20</td>
                                            <td>8</td>
                                            <td>
                                                <Input></Input>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
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

export default ResultForm
