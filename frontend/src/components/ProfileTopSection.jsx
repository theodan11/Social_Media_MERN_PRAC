import React, { useContext } from 'react'
import './profileTopSection.css'
import { Add, CameraAlt, Message, MoreHoriz } from '@mui/icons-material'
import { useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const ProfileTopSection = ({ userData }) => {
    // console.log('from top section ', userData)
    console.log(userData?.coverPicture)
    const { user: currentUser } = useContext(AuthContext)

    const location = useLocation()
    const locId = location.pathname.split("/")[2]
    const userId = currentUser._id
    // console.log(`this is loc id:${locId}`)
    // console.log(`this is current user id:${userId}`)
    const isFollowing = currentUser.followers.includes(locId.toString())
    // console.log(isFollowing)
    const isId = (userId === locId)

    // console.log("param ", locId)
    // console.log("user ", userId)
    // console.log(isId)
    return (
        <div className='profileTopContainer'>
            <div className="container">
                <div className="imgContainer">
                    <img srcSet={userData?.coverPicture || '/assets/default_cover.jpg'} alt="" srcset="" />

                </div>
                <div className="pNameAndActions">
                    <div className="pImage">
                        <img srcSet={userData.profilePicture || "/assets/default_dp.jpg"} alt="" />

                    </div>
                    {isId && <div className="editProfilePic">
                        <label htmlFor="editDP" >

                            <CameraAlt />
                        </label>
                        <input type="file" id='editDP' accept='.png, .jpg, jpeg' style={{ "display": "none" }} />
                    </div>}

                    <div className="actionsContainer">

                        <div className="nameAndFriends">
                            <h2 className='name'>{userData.username}</h2>
                            <p className='friends'>{userData.followers?.length} friends</p>
                        </div>
                        {isId ?
                            <div className="actions">
                                <button className='m-btn m-btn-muted'>+ Add to story</button>
                                <button className='m-btn m-btn-primary'>
                                    <Message sx={{ fontSize: 14 }} />Message</button>
                            </div> :
                            isFollowing ? <div className="actions">
                                {/* <button className='m-btn m-btn-muted'>+ Add to story</button> */}
                                <button className='m-btn m-btn-primary m-btn-unfollow'>
                                    <Add sx={{ fontSize: 14 }} />Unfollow</button>
                            </div> :
                                <div className="actions">
                                    {/* <button className='m-btn m-btn-muted'>+ Add to story</button> */}
                                    <button className='m-btn m-btn-primary'>
                                        <Add sx={{ fontSize: 14 }} />Follow</button>
                                </div>
                        }

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
        </div >
    )
}

export default ProfileTopSection