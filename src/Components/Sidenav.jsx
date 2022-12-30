import React from 'react'
import {Sidenavcomp} from './Sidenavcomp';
import LogoutIcon from '@mui/icons-material/Logout';


function SideNav() {
  return (
    <>
    <div className='Sidenav'>
      <ul className='SidenavList'>
    
        {Sidenavcomp.map((val,key) => {
          return(
            <li 
              key={key} 
              className='row'
              id={window.location.pathname === val.link ? "active" :""}
                  
              onClick={()=> {
                window.location.pathname = val.link
                }}
                >
                  <div id='navcomp'>  
                    <div id='icon'>{val.icon}</div>
                    <div id='title'> {val.title}</div>
                  </div> 
            </li>
          )
          })}
      </ul>
      <div className='Logout_btn' /*onClick={}*/ >
          <icon id='lobtn'><LogoutIcon /> Log Out</icon>
      </div>
          

    </div>

    </>
    )
}

export default SideNav