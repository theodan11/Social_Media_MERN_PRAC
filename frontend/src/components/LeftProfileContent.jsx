import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './leftProfileContent.css'


import PhotoModal from './PhotoModal'
const LeftProfileContent = ({ user }) => {
  const [photos, setPhotos] = useState([])
  const [isModal, setisModal] = useState(false)

  const [imageIndex, setImageIndex] = useState()
  const handleImageClick = (i) => {
    setisModal(true)
    setImageIndex(i)

  }

  console.log(` index is: ${imageIndex}`)
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
  // console.log(`from photos state: ${photos}`)

  return (
    <div className='leftContentContainer'>
      {isModal && <PhotoModal userId={user._id} imageIndex={imageIndex} />}
      <div className="introCard card">
        <h2 className='title'>Intro</h2>
        <p className='desc'>{user.desc}</p>
        <hr />
      </div>

      <div className="leftContentPhotos">
        <h2 className='title'>Photos</h2>

        <div className="photoListContainer">
          {photos.map((photo, i) => {

            {/*  */ }
            return <div key={photo._id} onClick={() => handleImageClick(i)} className="photoItem">
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