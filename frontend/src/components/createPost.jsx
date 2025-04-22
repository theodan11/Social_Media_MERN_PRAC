import { PhotoLibraryTwoTone, SaveAlt, SentimentSatisfiedAltTwoTone, VideoCameraFrontTwoTone } from '@mui/icons-material'
import React, { useContext, useRef } from 'react'
import { AuthContext } from '../context/AuthContext'

const CreatePost = ({profileImage}) => {
    const {user} = useContext(AuthContext)
    const postCaption = useRef()

    const handleSubmit = (e)=>{
        
    }

    return (
        <form className="creatPost" onSubmit={handleSubmit}>
            <div className="des">


                <img src={user.profilePicture|| `/assets/default_dp.jpg`} className='profileImage' alt="" />
                <div className="inputContainer">
                    <input type="text" placeholder={`What's on your mind, ${user.username}`} ref={postCaption}/>
                </div>
            </div>
            <hr />
            <div className="postBtns">
                <div className="btnItem">
                    <VideoCameraFrontTwoTone style={{color: "#f31100"}} className='btnIcon' />
                    <span className='btnItemText'>Live video</span>
                </div>
                <div className="btnItem">
                    <PhotoLibraryTwoTone style={{color: "#0011f3"}} className='btnIcon' />
                    <span className='btnItemText'>Photo/video</span>
                </div>
                <button className="btnItem btnS" type='submit' style={{border: "none"}}>
                    <SaveAlt style={{color: "#45e800"}} className='btnIcon' />
                    <span className='btnItemText'>Post</span>
                </button>
                {/* <div className="btnItem">
                    <SentimentSatisfiedAltTwoTone className='btnIcon' />
                    <span className='btnItemText'>Feeling/activity</span>
                </div> */}
            </div>
        </form>
    )
}

export default CreatePost