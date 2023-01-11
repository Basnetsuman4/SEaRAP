import React from 'react'
import './Dashboard.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Icon } from '@mui/material';
// import Profile from './Profile';
import Register from './Register';


const Dashboard = () => {
  return (
            <>          
                <div className="dashboard">
                    <div className='dash_header'>    
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
                        <Register/>
                    </div>

                </div>                                  
            </>

    )
}


export default Dashboard;