import { Close, PhotoLibraryTwoTone, SaveAlt, SentimentSatisfiedAltTwoTone, VideoCameraFrontTwoTone } from '@mui/icons-material'
import React, { useContext, useRef, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'

const CreatePost = () => {
    const { user } = useContext(AuthContext)
    const [file, setFile] = useState(null)
    const postCaption = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userPost = {
            userId: user._id,
            content: postCaption.current.value
        }
        if (file) {

            const fileName = Date.now() + "_" + file.name.split(".").pop()

            const formData = new FormData()
            formData.append("filename", fileName)
            formData.append("file", file)
            userPost.image = fileName
            console.log(fileName)
            await axios.post(`${import.meta.env.VITE_API_BASE_URL}/upload`, formData)

        }
        console.log(userPost)
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/post/create`, userPost)
            console.log(res.data)
            window.location.reload()
        } catch (error) {

        }
    }

    return (
        <form className="creatPost" onSubmit={handleSubmit}>
            <div className="des">


                <img src={user.profilePicture || `/assets/default_dp.jpg`} className='profileImage' alt="" />
                <div className="inputContainer">
                    <input type="text" placeholder={`What's on your mind, ${user.username}`} ref={postCaption} />
                </div>


            </div>
            <hr />
            {file && <div className="createPostImage">
                <img src={URL.createObjectURL(file)} alt="" />
                <div className='imageCancle' onClick={() => setFile(null)}><Close /></div>
            </div>}
            <div className="postBtns">
                <div className="btnItem">
                    <VideoCameraFrontTwoTone style={{ color: "#f31100" }} className='btnIcon' />
                    <span className='btnItemText'>Live video</span>
                </div>
                <div className="">
                    <label className="btnItemUpload" htmlFor="fileupload">

                        <PhotoLibraryTwoTone style={{ color: "#0011f3" }} className='btnIcon' />
                        <span className='btnItemText'>Photo/video</span>
                    </label>
                    <input type="file" accept='.png, .jpg, jpeg' id='fileupload' style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                </div>
                <button className="btnItem btnS" type='submit' style={{ border: "none" }}>
                    <SaveAlt style={{ color: "#45e800" }} className='btnIcon' />
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