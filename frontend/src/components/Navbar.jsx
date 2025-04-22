import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { KeyboardArrowDown, Home, WhatsApp, Notifications, Widgets, PeopleOutlineTwoTone, PeopleTwoTone, Search, Storefront, OndemandVideo, Person } from '@mui/icons-material'
import { AuthContext } from '../context/AuthContext'


const Navbar = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className='navbarContainer'>
            <div className="navbarLeft">
                <Link to={'/'} style={{ textDecoration: "none" }}>
                    <span className="logo">t </span>
                </Link>
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
                    <Link to={`profile/${user._id}`}>
                    <div className="profileImageContainer">
                        <img src={user.profilePicture || `/assets/default_dp.jpg`} className='profileImage' alt="" />
                        <span className='profileBadge'><KeyboardArrowDown /></span>

                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar