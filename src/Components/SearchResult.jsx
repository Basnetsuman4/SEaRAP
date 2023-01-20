import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
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
                        className='SearchPanel'
                        options={StudentList}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Search Student" />}
                    />
                </div>
                
                <div className="SearchBtn">
                    <input type="submit" value="Search" name='' /> 
                </div>
            
            </div>  
        </div>

        <div className="body">
            
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
        'Asmit Oli'    
 
      ];

export default SearchResult;