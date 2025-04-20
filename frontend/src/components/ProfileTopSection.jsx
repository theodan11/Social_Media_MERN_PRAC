import React from 'react'
import './profileTopSection.css'
import { Message , MoreHoriz} from '@mui/icons-material'

const ProfileTopSection = () => {
    return (
        <div className='profileTopContainer'>
            <div className="container">
                <div className="imgContainer">
                    <img src="../../public/assets/post/1.jpeg" alt="" srcset="" />
                </div>
                <div className="pNameAndActions">
                    <div className="pImage">
                        <img src="../../public/assets/person/1.jpeg" alt="" />
                    </div>
                    <div className="actionsContainer">

                        <div className="nameAndFriends">
                            <h2 className='name'>Jane Doe</h2>
                            <p className='friends'>32 friends</p>
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
                            <div><MoreHoriz/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileTopSection