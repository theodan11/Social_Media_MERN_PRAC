import React, { useEffect, useState } from 'react'
import './photoModal.css'
import axios from 'axios'

const PhotoModal = ({ userId, imageIndex }) => {
    const [photoList, setPhotoList] = useState([])
    const [imageIndexS, setImageIndexS] = useState(imageIndex)
    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/post/user/photos/${userId}`)

                if (res.data?.data > 0) {
                    setPhotoList(res.data?.data)
                    console.log(`from photomodal ${photoList}`)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchPhotos()
    }, [userId, imageIndex])

    return (
        <div className='imageModal'>
            <button onClick={() => setImageIndexS(imageIndexS--)}>-</button>
            <p>{photoList[imageIndexS]}</p>
            <img srcSet={photoList[imageIndexS]} alt="" />
            <button onClick={() => setImageIndexS(imageIndexS++)}>+</button>
        </div>
    )
}

export default PhotoModal