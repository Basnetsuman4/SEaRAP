import React /*{ useState }*/ from 'react'
import {Sidenavcomp} from './Sidenavcomp';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';




function SideNav() {
  
   
  

  
  return (
    <>

<div   className='Sidenav' >
      <div className='menuToggle' /*onClick={}*/ >
          <div id='hamburger'><MenuIcon /></div>
      </div>
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
          <div id='lobtn'><LogoutIcon /> Log Out</div>
      </div>
          

    </div>

        </>
    )
}

export default SideNav;
