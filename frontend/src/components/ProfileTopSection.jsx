import React, { useContext } from 'react'
import './profileTopSection.css'
import { CameraAlt, Message, MoreHoriz } from '@mui/icons-material'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const ProfileTopSection = ({ user }) => {
    console.log('from top section ', user)
    console.log(user?.coverPicture)
    const { user: currentUser } = useContext(AuthContext)

    const location = useLocation()
    const locId = location.pathname.split("/")[2]
    const userId = currentUser._id

    const isId = (userId === locId)

    console.log("param ",locId)
    console.log("user ",userId)
    console.log(isId)
    return (
        <div className='profileTopContainer'>
            <div className="container">
                <div className="imgContainer">
                    <img srcSet={'https://' + user?.coverPicture || '/assets/default_cover.jpg'} alt="" srcset="" />

                </div>
                <div className="pNameAndActions">
                    <div className="pImage">
                        <img srcSet={user.profilePicture || "/assets/default_dp.jpg"} alt="" />

                    </div>
                    {isId && <div className="editProfilePic">
                        <label htmlFor="editDP" >

                            <CameraAlt />
                        </label>
                        <input type="file" id='editDP' accept='.png, .jpg, jpeg' style={{ "display": "none" }} />
                    </div>}

                    <div className="actionsContainer">

                        <div className="nameAndFriends">
                            <h2 className='name'>{user.username}</h2>
                            <p className='friends'>{user.followers?.length} friends</p>
                        </div>

                        <div className="actions">
                            <button className='m-btn m-btn-muted'>+ Add to story</button>
                            <button className='m-btn m-btn-primary'>
                                <Message sx={{ fontSize: 14 }} />Message</button>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="tabsAndActions">
                        <div className="leftActions">
                            <div className="leftAction-item active">
                                <span>Posts</span>
                            </div>
                            <div className="leftAction-item">
                                <span>About</span>
                            </div>
                            <div className="leftAction-item">
                                <span>Photos</span>
                            </div>
                            <div className="leftAction-item">
                                <span>Videos</span>
                            </div>
                            <div className="leftAction-item">
                                <span>Check-ins</span>
                            </div>
                        </div>
                        <div className="rightActions">
                            <div><MoreHoriz /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileTopSection