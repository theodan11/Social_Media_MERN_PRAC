import React, { useEffect, useState } from 'react'
import './profile.css'
import { House, MessageRounded, Person, Place, School, WatchLater } from '@mui/icons-material'
// import CreatePost from '../components/createPost'
import IntroItems from '../components/IntroItems'
import Feed from '../components/Feed'
import UserPost from '../components/UserPost'
import ProfileTopSection from '../components/ProfileTopSection'
import RightProfileContent from '../components/RightProfileContent'
import LeftProfileContent from '../components/leftProfileContent'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const Profile_page = () => {
    const [user, setUser] = useState({})
    const location = useLocation()
    
    const userId = location.pathname.split('/')[2]

    useEffect(()=>{
        const fetchUser = async ()=>{
            const res = await axios.get(`http://localhost:8000/api/v1/user/${userId}`)
            console.log("from profilePage",res)
            setUser(res.data)
        }

        fetchUser()
    }, [userId])
    // console.log(userId)

    

    return (
        <>
            <ProfileTopSection user={user}/>
            <div className='profile'>
                <div className="profileContents">
                    <LeftProfileContent  user={user} />
                    <RightProfileContent userId={userId}/>
                </div>
            </div>
        </>

    )
}

export default Profile_page