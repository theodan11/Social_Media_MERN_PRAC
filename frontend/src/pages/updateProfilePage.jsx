import React, { useContext, useRef } from 'react'
import { AuthContext } from '../context/AuthContext'
import './updateProfilePage.css'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import { UpdateStart, UpdateSuccess } from '../context/AuthAction'

const UpdateProfilePage = () => {
    const navigate = useNavigate()
    const { user, dispatch, isFetching } = useContext(AuthContext)

    const usernameRef = useRef()
    const descRef = useRef()
    const profilePictureRef = useRef()
    const coverPictureRef = useRef()
    // console.log(user)
    const handleChange = async () => {
        const url = `${import.meta.env.VITE_API_BASE_URL}/user/update/${user._id}`
        const updateData = {}

        if (usernameRef.current.value != '') {
            updateData.username = usernameRef.current.value
        }
        if (descRef.current.value != '') {
            updateData.desc = descRef.current.value
        }
        if (profilePictureRef.current.value != '') {
            updateData.profilePicture = profilePictureRef.current.value
        }
        if (coverPictureRef.current.value != '') {
            updateData.coverPicture = coverPictureRef.current.value
        }
        // console.log(updateData)

        try {
            dispatch(UpdateStart())
            const res = await axios.put(url, updateData, {
                withCredentials: true,
            })

            // console.log(`after update ${JSON.stringify(res.data)}`)
            // localStorage.clear()

            dispatch(UpdateSuccess(res.data))
            //    localStorage.setItem("user", JSON.stringify(res.data))

            if (localStorage.getItem("user") != null) {
                navigate('/')
            }


        } catch (error) {

        }
    }

    return (
        <div className='updateProfile'>
            <div className="updateContainer">

                <h1>Update Profile</h1>
                <label htmlFor="profilePicture">Profile Picture Link</label>
                <div className='inputContainer'>
                    <input type="text" name='profilePicture' ref={profilePictureRef} placeholder={user.profilePicture} />

                </div>
                <label htmlFor="coverPicture">Cover Picture Link</label>
                <div className='inputContainer'>
                    <input type="text" name='coverPicture' ref={coverPictureRef} placeholder={user.coverPicture} />
                </div>
                <label htmlFor="username">Username</label>
                <div className='inputContainer'>
                    <input type="text" name='username' ref={usernameRef} placeholder={user.username} />
                </div>
                <label htmlFor="desc">Description</label>
                <div className='inputContainer'>
                    <textarea type="text" name='desc' ref={descRef} placeholder={user.desc} maxLength={400} rows={8} />

                </div>
                {/* <input type="text" name='username' ref={usernameRef} placeholder={user.username} /> */}

                <button className='submitButton' onClick={handleChange}>click here</button>
            </div>
        </div>
    )
}

export default UpdateProfilePage