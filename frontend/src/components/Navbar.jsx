import './navbar.css'
import { KeyboardArrowDown, Home, WhatsApp, Notifications, Widgets, PeopleOutlineTwoTone, PeopleTwoTone, Search, Storefront, OndemandVideo, Person } from '@mui/icons-material'
import React from 'react'

const Navbar = () => {
    return (
        <div className='navbarContainer'>
            <div className="navbarLeft">

                <span className="logo">f </span>
                <div className="searchContainer">
                    <Search className='searchIcon' />
                    <input type="text" placeholder='Search...' className="searchInput" />
                </div>
            </div>




            <div className="navbarCenter">
                <div className="navbarCenterLinks">
                    <div className="navbarCenterLinkItem active">
                        <Home className='centerIcon' />
                    </div>
                    <div className="navbarCenterLinkItem">
                        <PeopleTwoTone className='centerIcon' />
                    </div>
                    <div className="navbarCenterLinkItem">
                        <OndemandVideo className='centerIcon' />
                    </div>
                    <div className="navbarCenterLinkItem">
                        <Storefront className='centerIcon' />
                    </div>
                    <div className="navbarCenterLinkItem">
                        <PeopleOutlineTwoTone className='centerIcon' />
                    </div>
                </div>
            </div>




            <div className="navbarRight">
                <div className="navbarRightLinks">
                    <div className="navbarRightLinkItem hcontent menu">
                        <Widgets className='rightIcon' />
                    </div>
                    <div className="navbarRightLinkItem hcontent message">
                        <WhatsApp className='rightIcon' />
                        <span className='badge'>99</span>
                    </div>
                    <div className="navbarRightLinkItem hcontent notifications">
                        <Notifications className='rightIcon' />
                        <span className='badge'>1</span>
                    </div>
                    <div className="navbarRightLinkItem">
                        <Person className='rightIcon' />
                        <span className='profileBadge'><KeyboardArrowDown /></span>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar