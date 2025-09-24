import React, { useEffect, useState } from 'react'
import './rightSidebar.css'
import { Search, MoreHoriz, Settings } from '@mui/icons-material'
import ContactItems from './ContactItems'
import axios from 'axios'
import { Avatar } from '@mui/material'


const RightSidebar = () => {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    // const res = await axios.get(`http://localhost:8000/api/v1/post/user/timeline/${user._id}`)
    const fetchFollowers = async () => {
      try {

        const res = await axios.get("http://localhost:8000/api/v1/user/get/followers", {
          withCredentials: true
        })
        setFriends(res.data?.data)
        console.log(res.data)
      } catch (error) {

      }


    }
    fetchFollowers()

  }, [])


  return (
    <div className='rightSidebarContainer'>
      <div className="rightSidebarWrapper">
        <div className="sponserContainer">
          <h3>Sponser</h3>
        </div>
        <hr />
        <div className="contactsContainer">
          <div className="contactHeader">
            <h3>Contacts</h3>
            <div className="contactsActions">
              <div className="actionItem">
                <Search />
              </div>
              <div className="actionItem">
                <MoreHoriz />
              </div>
            </div>
          </div>
          <div className="contacts">
            {friends && friends.map((friend) => {
              return <ContactItems Image={friend['profilePicture']} name={friend['username']} isOnline={true} />
            })}
            {/* <ContactItems Image={"/public/assets/person/1.jpeg"} name={"Jane Doe"} isOnline={true} />
            <ContactItems Image={"/public/assets/person/2.jpeg"} name={"John Doe"} />
            <ContactItems Image={"/public/assets/person/3.jpeg"} name={"Jando Doe"} isOnline={true} />
            <ContactItems Image={"/public/assets/person/4.jpeg"} name={"Chan Lee"} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar