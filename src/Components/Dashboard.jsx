import React from 'react'
import './Dashboard.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Icon } from '@mui/material';
// import Profile from './Profile';
//  import Register from './Register';
// import SearchResult from './SearchResult';
// import RegisterInitialForm from './RegisterInitialForm';
// import RegForm from './RegForm';
// import Account from './Account';
import DueFee from './DueFee';

const Dashboard = () => {
  return (
            <>          
                <div className="dashboard">
                    <div className='dash_header'>  
                    <div className="clockDiv">                    
                        <div id="clock">
                                <span id="hrs">00 </span>:<span id="min">00 </span>:<span id="sec">00 </span>
                                <span id="duration"> AM</span>
                        </div>  
                    </div>
                        <div className='notification_div'>
                            <div className="badge">
                                <Icon id='bellIcon'>
                                    <NotificationsIcon/>
                                </Icon>
                            </div>            
                        </div>                                                
                        
                        <div className="userName_div">
                            <div className="showUser">
                                <div className="userName">
                                    <div className="name">Arun Basnet</div>               
                                </div>
                                
                                <div className="userImage">
                                    <img id="img-profile" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9j5kXSP12ylfgHx30qabxtDu0GAX1cm19TTaKZVA1hONj-t6MfsXechjGt6hyYoPBD4Y&usqp=CAU" alt="demo" rel="norefferer" />
                                </div>
                            </div>
                        </div>                       
                    </div>

                    <div className='dash_separator'>
                    </div>

                    <div className='dash_body'>
                        {/* <Profile/> */}
                        {/* <Register/> */}
                        {/* <RegForm/> */}
                        {/* <Account/> */}
                        <DueFee/>
                        {/* <RegisterInitialForm/> */}
                    </div>

                </div>                                  
            </>

    )
}

  

 



function currentTime()
{


    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    // let t = setTimeout(function(){ currentTime() }, 1000); 
}
setInterval(currentTime, 10);




export default Dashboard;