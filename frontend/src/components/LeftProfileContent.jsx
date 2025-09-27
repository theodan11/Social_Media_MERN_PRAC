import axios from 'axios'
import React, { useEffect, useState } from 'react'

const LeftProfileContent = ({ user }) => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {

    const fetchPhotos = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/post/user/photos/${user._id}`, {
          withCredentials: true
        })
        console.log(res.data)
        if (res.data.length > 0) {

          setPhotos(res.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchPhotos()
  }, [user])

  return (
    <div className='leftContentContainer'>
      <div className="introCard card">
        <h2 className='title'>Intro</h2>
        <p className='desc'>{user.desc}</p>
        <hr />
      </div>

      <div className="leftContentPhotos card">
        <h2 className='title'>Photos</h2>


      </div>
      <div className="leftContentFriends card">
        <h2 className='title'>Friends</h2>
        <p className='friendsSub'>{user.followers?.length} friends</p>

      </div>
    </div>
  )
}

export default LeftProfileContent