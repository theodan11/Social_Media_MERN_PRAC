import React from 'react'
import './profile.css'
import { House, MessageRounded, Person, Place, School, WatchLater } from '@mui/icons-material'
import CreatePost from '../components/createPost'
import IntroItems from '../components/IntroItems'
import Feed from '../components/Feed'
import UserPost from '../components/UserPost'
import ProfileTopSection from '../components/ProfileTopSection'

const Profile_page = () => {
    return (
        <div className='profile'>
            <ProfileTopSection/>

        </div>
     
    )
}

export default Profile_page