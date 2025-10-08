import React, { useEffect, useState } from 'react'
import './photoModal.css'
import axios from 'axios'

const PhotoModal = ({ userId, imageIndex, photo }) => {
    const [photoList, setPhotoList] = useState([])
    const [imageIndexS, setImageIndexS] = useState(imageIndex)

    console.log(`from modal ${photo[imageIndex]}`)
    return (
        <div className='imageModal'>
            <button onClick={() => setImageIndexS(imageIndexS--)}>-</button>
            <p>{photo}</p>

            <button onClick={() => setImageIndexS(imageIndexS++)}>+</button>
        </div>
    )
}

export default PhotoModal