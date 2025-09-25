import React, { useEffect, useState } from 'react'
import './rightSidebar.css'
import { Search, MoreHoriz, Settings } from '@mui/icons-material'
import ContactItems from './ContactItems'
import axios from 'axios'



const RightSidebar = () => {
  const [friends, setFriends] = useState([])

  useEffect(() => {

    const fetchFollowers = async () => {
      try {

        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/user/get/followers`, {
          withCredentials: true
        })
        setFriends(res.data?.data)
        // console.log(res.data)
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
              return <ContactItems key={friend._id} Image={friend['profilePicture']} name={friend['username']} isOnline={true} />
            })}

          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar