import React from 'react'
import './profile.css'
import { House, MessageRounded, Person, Place, School, WatchLater } from '@mui/icons-material'
import CreatePost from '../components/createPost'
import IntroItems from '../components/IntroItems'
import Feed from '../components/Feed'
import UserPost from '../components/UserPost'
import ProfileTopSection from '../components/ProfileTopSection'
import RightProfileContent from '../components/RightProfileContent'
import LeftProfileContent from '../components/leftProfileContent'

const Profile_page = () => {
    return (
        <>
            <ProfileTopSection />
            <div className='profile'>
                <div className="profileContents">
                    <LeftProfileContent />
                    <RightProfileContent />
                </div>
            </div>
        </>

    )
}

export default Profile_page