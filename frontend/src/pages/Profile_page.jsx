import React from 'react'
import './profile.css'
import { MessageRounded, Person } from '@mui/icons-material'
import CreatePost from '../components/createPost'

const Profile_page = () => {
    return (

        <div className="profile">
            <div className="topContainer">
                <img className='cImage' src="/public/assets/post/1.jpeg" alt="" />
                <div className="profileContainer">
                    <img className='pImage' src="/public/assets/person/1.jpeg" alt="" />
                </div>
                <div className="profilName">
                    <div className="profileNameContainer">
                        <h1>
                            Jane doe
                        </h1>
                        <p>218 friends . 3 mutual</p>
                    </div>
                    <div className="profileNameActions">
                        <div className="buttonContainer">
                            <Person /> <span>Friends</span>
                        </div>
                        <div className="buttonContainer">
                            <MessageRounded /> <span>Message</span>
                        </div>
                    </div>
                </div>
                    
            </div>

            <div className="bodyContainer">
                <div className="sidebarLeft">

                </div>
                <div className="postContainer">
                <CreatePost profileImage={'/public/assets/person/1.jpeg'}/>
                </div>
            </div>
        </div>

        // <div className="profile">
        //     <div className="topProfileWrapper">
        //         <div className="topProfileContent">
        //             <div className="coverImage">
        //                 <img className='cImage' src="/public/assets/post/1.jpeg" alt="" />
        //             </div>
        //             <div className="profileImageP">
        //                 <img className='pImage' src="/public/assets/person/1.jpeg" alt="" />
        //             </div>



        //         </div>
        //     </div>
        // </div>

    )
}

export default Profile_page