import React ,{ useState } from 'react'
import { Sidenavcomp } from './Sidenavcomp'
import LogoutIcon from '@mui/icons-material/Logout'
import MenuIcon from '@mui/icons-material/Menu'

function SideNav() {

    const[isOpen,setisOpen]=useState(true)
    const toggle =()=> setisOpen(!isOpen)
    return (
        <>
            <div className="Sidenav"  style={{width :isOpen ?"18rem" : "6rem"}}>
                <div className="menuToggle" >
                    <div id="hamburger" onClick={toggle}>
                        <MenuIcon />
                    </div>
                </div>
                <ul className="SidenavList">
                    {Sidenavcomp.map((val, key) => {
                        return (
                            <li
                                key={key}
                                className="row"
                                id={
                                    window.location.pathname === val.link
                                        ? 'active'
                                        : ''
                                }
                                onClick={() => {
                                    window.location.pathname = val.link
                                }}
                            >
                                <div id="navcomp" onClick={toggle}>
                                    {isOpen?
                                    (<>
                                        <div id="icon">{val.icon}</div> 
                                        <div id="title"> {val.title}</div> 
                                        </> 
                                        ):(
                                            <div id="icon">{val.icon}</div> 

                                    )}
                                </div>
                            </li>
                        )
                    })}
                </ul>

                {/* <div className="Logout_btn"  >
                    <div id="lobtn">
                        <LogoutIcon /> Log Out
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default SideNav
