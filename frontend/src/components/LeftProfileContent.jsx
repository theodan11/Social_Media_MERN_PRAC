import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './leftProfileContent.css'
const LeftProfileContent = ({ user }) => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {

    const fetchPhotos = async () => {
      try {
        setPhotos([])
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/post/user/photos/${user._id}?limitQuery=8`, {
          withCredentials: true
        })
        console.log(res.data.data)
        if (res.data.data.length > 0) {
          setPhotos(res.data?.data)


          console.log(`from photos state: ${photos}`)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchPhotos()
  }, [user])
  console.log(`from photos state: ${photos}`)

  return (
    <div className='leftContentContainer'>
      <div className="introCard card">
        <h2 className='title'>Intro</h2>
        <p className='desc'>{user.desc}</p>
        <hr />
      </div>

      <div className="leftContentPhotos">
        <h2 className='title'>Photos</h2>

        <div className="photoListContainer">
          {photos.map((photo) => {

            {/*  */ }
            return <div key={photo._id} className="photoItem">
              <img srcSet={photo.image} alt="" />
            </div>


          })}
        </div>


      </div>
      <div className="leftContentFriends card">
        <h2 className='title'>Friends</h2>
        <p className='friendsSub'>{user.followers?.length} friends</p>

      </div>
    </div>
  )
}

export default LeftProfileContent