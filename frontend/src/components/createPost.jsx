import { PhotoLibraryTwoTone, SentimentSatisfiedAltTwoTone, VideoCameraFrontTwoTone } from '@mui/icons-material'
import React from 'react'

const CreatePost = ({profileImage}) => {
    return (
        <div className="creatPost">
            <div className="des">


                <img src={profileImage} className='profileImage' alt="" />
                <div className="inputContainer">
                    <input type="text" placeholder="What's on your mind, Jane?" />
                </div>
            </div>
            <hr />
            <div className="postBtns">
                <div className="btnItem">
                    <VideoCameraFrontTwoTone className='btnIcon' />
                    <span className='btnItemText'>Live video</span>
                </div>
                <div className="btnItem">
                    <PhotoLibraryTwoTone className='btnIcon' />
                    <span className='btnItemText'>Photo/video</span>
                </div>
                <div className="btnItem">
                    <SentimentSatisfiedAltTwoTone className='btnIcon' />
                    <span className='btnItemText'>Feeling/activity</span>
                </div>
            </div>
        </div>
    )
}

export default CreatePost