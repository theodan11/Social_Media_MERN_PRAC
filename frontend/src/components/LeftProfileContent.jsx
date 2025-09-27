import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './leftProfileContent.css'


import PhotoModal from './PhotoModal'
const LeftProfileContent = ({ user }) => {


  const [photos, setPhotos] = useState([])
  const [photoShortList, setPhotoShortList] = useState([])
  const [isModal, setisModal] = useState(false)
  const [imageIndex, setImageIndex] = useState(1)

  const handleImageClick = (i) => {
    setisModal(true)
    setImageIndex(Number(i))

  }

  useEffect(() => {

    const fetchPhotos = async () => {
      try {
        setPhotos([])
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/post/user/photos/${user._id}`)
        console.log(res.data.data)
        if (res.data.data.length > 0) {
          setPhotos(res.data?.data)

        }
        setPhotoShortList(res.data?.data.slice(0, 8))
      } catch (error) {
        console.log(error)
      }
    }
    fetchPhotos()
  }, [user])

  return (
    <div className='leftContentContainer'>
      {/* {isModal && <PhotoModal userId={user._id} imageIndex={imageIndex} />} */}
      {/* {isModal && <PhotoModal userId={user._id} imageIndex={imageIndex} photo={photos} />} */}
      {isModal &&
        <div className='imageModal'>
          <button onClick={() => setImageIndex((prev) => prev > 0 ? prev -= 1 : photos.length - 1)}>-</button>
          <img srcSet={photos[imageIndex]["image"]} alt="" />
          <button onClick={() => setImageIndex((prev) => prev < photos.length - 1 ? prev += 1 : 0)}>+</button>

        </div>}
      <div className="introCard card">
        <h2 className='title'>Intro</h2>
        <p className='desc'>{user.desc}</p>
        <hr />
      </div>

      <div className="leftContentPhotos">
        <h2 className='title'>Photos</h2>

        <div className="photoListContainer">
          {photoShortList.map((photo, i) => {
            return (<div key={photo._id} onClick={() => handleImageClick(i)} className="photoItem">
              <img srcSet={photo.image} alt="" />
            </div>)
          })}
        </div>


      </div>
      <div className="leftContentFriends card">
        <h2 className='title'>Friends</h2>
        <p className='friendsSub'>{user.followers?.length} friends</p>

      </div>

    </div >
  )
}

export default LeftProfileContent