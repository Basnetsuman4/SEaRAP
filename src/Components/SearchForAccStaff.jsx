import React from 'react'
import './SearchStudentDE.css'
import { Card, CardHeader, CardBody, Label, Input } from 'reactstrap'

const SearchStudentDE = () => {
    return (
        <>
            <Card>
                <CardHeader>
                    <h1>SEARCH STUDENT</h1>
                </CardHeader>

                <div className="sections">
                    <div className="selectsection">
                        <div className="stream">
                            <Label for="exampleSelect">Batch</Label>
                            <Input
                                type="select"
                                name="selectStream"
                                id="selectStream"
                            >
                                <option>2076</option>
                                <option>2075 </option>
                                <option>2074 </option>
                                <option>2073 </option>
                            </Input>
                        </div>
                        <div className="stream">
                            <Label for="exampleSelect">Stream</Label>
                            <Input
                                type="select"
                                name="selectStream"
                                id="selectStream"
                            >
                                <option>
                                    BCT - Bachelors in Computer Engineering
                                </option>
                                <option>
                                    BCE - Bachelors in Civil Engineering
                                </option>
                                <option>
                                    BCA - Bachelors of Computer Application
                                </option>
                            </Input>
                        </div>
                        <div className="stream">
                            <Label for="exampleSelect">Semester</Label>
                            <Input
                                type="select"
                                name="selectStream"
                                id="selectStream"
                            >
                                <option id="1">1</option>
                                <option id="2">2</option>
                                <option id="3">3</option>
                                <option id="4">4</option>
                                <option id="5">5</option>
                                <option id="6">6</option>
                                <option id="7">7</option>
                                <option id="8">8</option>
                                <option id="9">9</option>
                            </Input>
                        </div>
                    </div>
                    <div className="btnsection">
                        <div className="inputBx">
                            <input
                                type="submit"
                                id="searchbtn"
                                value="Search"
                                name=""
                            />
                        </div>
                    </div>
                </div>
                <CardBody className="SCard">
                    <div className="search-card">
                        <div className="individualCard">
                            <div className="imageSec">
                                <img
                                    id="img-profile"
                                    src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9j5kXSP12ylfgHx30qabxtDu0GAX1cm19TTaKZVA1hONj-t6MfsXechjGt6hyYoPBD4Y&usqp=CAU"
                                    alt="demo"
                                    rel="norefferer"
                                />
                            </div>
                            <div className="nameId">
                                <div className="name">
                                    <span>Suman Basnet</span>
                                </div>
                                <div className="id">
                                    <span>LEC076BCT037</span>
                                </div>
                            </div>
                            <div className="option">
                                <div className="viewBtn">
                                    <button id="view">Update Bill</button>
                                </div>
                                {/* <div className="resultBtn">
                                    <button id="result">Results</button>
                                </div> */}
                                <div className="deleteBtn">
                                    <button id="delete">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

export default SearchStudentDE
