import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import './SearchResult.css'

const SearchResult = () => {
    return (
        <>
            <div className="header">
                <div className="SearchBarDiv">
                    <div className="SearchStudent">
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            className="SearchPanel"
                            options={StudentList}
                            sx={{ width: 300 }}
                            renderInput={(params) => (
                                <TextField {...params} label="Search Student" />
                            )}
                        />
                    </div>

                    <div className="SearchBtn">
                        <input type="submit" value="Search" name="" />
                    </div>
                </div>
            </div>

            <div className="body">
                <div className="card">
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
                                <button id="view">View</button>
                            </div>
                            <div className="resultBtn">
                                <button id="result">Results</button>
                            </div>
                            <div className="editBtn">
                                <button id="edit">Edit</button>
                            </div>
                            <div className="deleteBtn">
                                <button id="delete">Delete</button>
                            </div>
                        </div>
                    </div>
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
                                <button id="view">View</button>
                            </div>
                            <div className="resultBtn">
                                <button id="result">Results</button>
                            </div>
                            <div className="editBtn">
                                <button id="edit">Edit</button>
                            </div>
                            <div className="deleteBtn">
                                <button id="delete">Delete</button>
                            </div>
                        </div>
                    </div>
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
                                <button id="view">View</button>
                            </div>
                            <div className="resultBtn">
                                <button id="result">Results</button>
                            </div>
                            <div className="editBtn">
                                <button id="edit">Edit</button>
                            </div>
                            <div className="deleteBtn">
                                <button id="delete">Delete</button>
                            </div>
                        </div>
                    </div>
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
                                <button id="view">View</button>
                            </div>
                            <div className="resultBtn">
                                <button id="result">Results</button>
                            </div>
                            <div className="editBtn">
                                <button id="edit">Edit</button>
                            </div>
                            <div className="deleteBtn">
                                <button id="delete">Delete</button>
                            </div>
                        </div>
                    </div>
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
                                <button id="view">View</button>
                            </div>
                            <div className="resultBtn">
                                <button id="result">Results</button>
                            </div>
                            <div className="editBtn">
                                <button id="edit">Edit</button>
                            </div>
                            <div className="deleteBtn">
                                <button id="delete">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const StudentList = [
    'Abhishek Neupane',
    'Aishwarya Shrestha',
    'Amrit Kumal',
    'Amrit Sapkota',
    'Anup Dumre',
    'Heman Das',
    'Jeshika Maharjan',
    'Malisha Maharjan',
    'Nischal Maharjan',
    'Nitish Rajopadhyaya',
    'Pradip Baral',
    'Pravesh Pandey',
    'Rabin Shrestha',
    'Rabindra Adhakari',
    'Rayal Khatri',
    'Roshan Adhikari',
    'Safal Marahatta',
    'Sakshyam Aryal',
    'Sanish Khadgi',
    'Sanjish Maharjan',
    'Subash Shakya',
    'Sujal Maharjan',
    'Suman Basnet',
    'Sumit Deshar',
    'Sumit Sharma',
    'Sushil Kafle',
    'Sushmita Kunwar',
    'Uttam Rajbansi',
    'Asmit Oli',
]

export default SearchResult
