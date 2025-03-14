import './navbar.css'
import { KeyboardArrowDown, Home, WhatsApp, Notifications, Widgets, PeopleOutlineTwoTone, PeopleTwoTone, Search, Storefront, OndemandVideo, Person } from '@mui/icons-material'
import React from 'react'

const Navbar = () => {
    return (
        <div className='navbarContainer'>
            <div className="navbarLeft">

                <span className="logo">t </span>
                <div className="searchContainer">
                    <Search className='searchIcon' />
                    <input type="text" placeholder='Search...' className="searchInput" />
                </div>
            </div>




            <div className="navbarCenter">
                <div className="navbarCenterLinks">
                    <div className="centerItemContainer active">
                        <div className="navbarCenterLinkItem  hcontent home">
                            <Home className='centerIcon active' />
                        </div>
                    </div>

                    <div className="centerItemContainer ">
                        <div className="navbarCenterLinkItem hcontent friends">
                            <PeopleTwoTone className='centerIcon' />
                        </div>

                    </div>

                    <div className="centerItemContainer ">
                        <div className="navbarCenterLinkItem hcontent video">
                            <OndemandVideo className='centerIcon' />
                        </div>
                    </div>

                    <div className="centerItemContainer ">
                        <div className="navbarCenterLinkItem hcontent marketplace">
                            <Storefront className='centerIcon' />
                        </div>
                    </div>


                    <div className="centerItemContainer ">
                        <div className="navbarCenterLinkItem hcontent groups">
                            <PeopleOutlineTwoTone className='centerIcon' />
                        </div>
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
                        <span className='badge'>2</span>
                    </div>
                    <div className="navbarRightLinkItem hcontent notifications">
                        <Notifications className='rightIcon' />
                        <span className='badge'>5</span>
                    </div>
                    <div className="profileImageContainer">
                       <img src="/assets/person/1.jpeg" className='profileImage' alt="" />
                        <span className='profileBadge'><KeyboardArrowDown /></span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar