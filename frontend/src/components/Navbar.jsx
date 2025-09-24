import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'
import { KeyboardArrowDown, Home, WhatsApp, Notifications, Widgets, PeopleOutlineTwoTone, PeopleTwoTone, Search, Storefront, OndemandVideo, Person, Logout, Settings, SettingsApplications } from '@mui/icons-material'
import { AuthContext } from '../context/AuthContext'
import SidebarShortcutItem from './sidebarShortcutItem'
import SidebarListItem from './sidebarListItem'
// import { Logout } from '../context/AuthAction'
import { LogoutUser } from '../context/AuthAction'


const Navbar = () => {
    const { user, dispatch } = useContext(AuthContext)
    const [profileModal, setProfileModal] = useState(false)
    const navigate = useNavigate()


    const handleLogout = (e) => {
        e.preventDefault()
        // setProfileModal(!profileModal)
        console.log('logout click')
        // localStorage.setItem("user", '')
        localStorage.clear("user")
        dispatch(LogoutUser())
        navigate('/')
    }
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

                    <div className="profileImageContainer" onClick={() => setProfileModal(!profileModal)}>
                        <img src={user.profilePicture || `/assets/default_dp.jpg`} className='profileImage' alt="" />
                        <span className='profileBadge'><KeyboardArrowDown /></span>

                    </div>
                    {profileModal &&
                        <div className="modal" >
                            <Link to={`profile/${user._id}`} style={{ "textDecoration": "none", "color": "inherit" }} onClick={() => setProfileModal(!profileModal)}>
                                <SidebarShortcutItem image={user.profilePicture} text={user.username} />
                            </Link>
                            <Link to={`updateProfile/${user._id}`} style={{ "textDecoration": "none", "color": "inherit" }} onClick={() => setProfileModal(!profileModal)}>
                                <SidebarShortcutItem Icon={SettingsApplications} text={"Update Your Profile"} />
                            </Link>
                            <hr />
                            <Link to={'/'} style={{ "textDecoration": "none", "color": "inherit" }} onClick={(e) => handleLogout(e)}>
                                <SidebarListItem Icon={Logout} text={"Log Out"} />
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar