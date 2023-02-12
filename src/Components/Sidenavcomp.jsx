import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import DescriptionIcon from '@mui/icons-material/Description'
import AutoGraphIcon from '@mui/icons-material/AutoGraph'
import './CSS File/Sidenavcomp.css'

export const Sidenavcomp = [
    {
        title: 'Profile',
        icon: <AccountCircleIcon />,
        link: '/profile',
    },
    {
        title: 'Registration',
        icon: <PersonAddIcon />,
        link: '/register',
    },
    {
        title: 'Results',
        icon: <DescriptionIcon />,
        link: '/results',
    },
    {
        title: 'Performance',
        icon: <AutoGraphIcon />,
        link: '/perfromance',
    },
    // ,
    // {

    //     title: 'Log Out',
    //     icon: <LogoutIcon/>,
    //     link:"/logout"
    // }
]
