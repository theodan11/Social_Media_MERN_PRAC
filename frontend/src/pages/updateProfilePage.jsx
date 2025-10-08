import React, { useContext, useRef, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import './updateProfilePage.css'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import { UpdateStart, UpdateSuccess } from '../context/AuthAction'
import supabase from '../supabaseApp'
import { Add } from '@mui/icons-material'

const UpdateProfilePage = () => {
    const navigate = useNavigate()
    const { user, dispatch, isFetching } = useContext(AuthContext)

    const usernameRef = useRef()
    const descRef = useRef()
    const [profileImage, setProfileImage] = useState()
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
        if (profileImage) {
            const fileExt = profileImage.name.split(".").pop()
            const filePath = `public/${user._id}/profile/${Date.now()}.${fileExt}`
            const { data, error } = await supabase.storage.from("uploads").upload(filePath, profileImage, {
                cacheControl: "3600",
                upsert: false
            })

            if (error) {
                throw error.message
            }
            const { data: { publicUrl: url } } = supabase.storage.from("uploads").getPublicUrl(filePath)


            updateData.profilePicture = url
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

            dispatch(UpdateSuccess(res.data))
            localStorage.setItem("user", JSON.stringify(res.data))

            if (localStorage.getItem("user") != null) {
                window.location.reload()
            }


        } catch (error) {

        }
    }

    return (
        <div className='updateProfile'>
            <div className="updateContainer">

                <h1>Update Profile</h1>
                <label htmlFor="">Upload a Profile Picture</label>

                <div className='inputContainer-image'>
                    {user.profilePicture && profileImage == undefined ? <img src={user.profilePicture} className='updateProfileImagePreview' /> : profileImage != undefined ? <img src={URL.createObjectURL(profileImage)} /> : <></>}
                    <input type="file" accept='.jpg, .png' name='profilePicture' id='profilePictureInput' onChange={(e) => setProfileImage(e.target.files[0])} />
                    <label htmlFor="profilePictureInput" className='profileAddImage'><Add /></label>
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