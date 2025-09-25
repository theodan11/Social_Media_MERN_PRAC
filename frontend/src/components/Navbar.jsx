import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'
import { KeyboardArrowDown, Home, WhatsApp, Notifications, Widgets, PeopleOutlineTwoTone, PeopleTwoTone, Search, Storefront, OndemandVideo, Person, Logout, Settings, SettingsApplications, Cancel, CancelOutlined } from '@mui/icons-material'
import { AuthContext } from '../context/AuthContext'
import SidebarShortcutItem from './sidebarShortcutItem'
import SidebarListItem from './sidebarListItem'
// import { Logout } from '../context/AuthAction'
import { LogoutUser } from '../context/AuthAction'
import axios from 'axios'
import { Avatar } from '@mui/material'


const Navbar = () => {
    const { user, dispatch } = useContext(AuthContext)
    const [profileModal, setProfileModal] = useState(false)
    const navigate = useNavigate()
    const [searchQuery, setSearQuery] = useState("")
    const [searchResults, setSearchResults] = useState([])

    // const searchURL = "/user/search/user"


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/user/search/user?username=${searchQuery}`)
                if (res.data) {
                    setSearchResults(res.data.user)
                }

                // console.log(searchResults)
            } catch (error) {
                console.log(error)
            }
        }
        if (searchQuery != "") {
            setSearchResults([])
            fetchUsers()
        }
    }, [searchQuery])

    const handleLogout = async (e) => {
        e.preventDefault()

        localStorage.clear("user")
        dispatch(LogoutUser())
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/auth/logout`)

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
                    <input type="text" value={searchQuery} placeholder='Search...' className="searchInput" onChange={(e) => setSearQuery(e.target.value)} />
                    {searchQuery.length > 0 && <CancelOutlined className='cancelSearch' onClick={(e) => setSearQuery('')} />}
                </div>

                {searchQuery != '' && <div className="searchResultContainer">

                    {searchResults.length > 0 && searchResults.map((searchResult) => {
                        return <Link to={`/profile/${searchResult._id}`} style={{ "textDecoration": "none", "color": "inherit" }}>
                            <div className='searchResultItem'>
                                {searchResult.profilePicture != "" ? <img src={searchResult.profilePicture} alt="" /> : <Avatar />}
                                <p key={searchResult._id}>{searchResult.username}</p>
                            </div>
                        </Link>
                    })}
                </div>}
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
                                <SidebarShortcutItem Icon={Settings} text={"Update Your Profile"} />
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