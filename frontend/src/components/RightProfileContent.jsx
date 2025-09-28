import React, { useContext, useEffect, useState } from 'react'
import CreatePost from './CreatePost'
import UserPost from './UserPost'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'

const RightProfileContent = ({ userId }) => {
  const { user } = useContext(AuthContext)
  const [userPosts, setUserPosts] = useState([])
  const isMyId = user._id === userId

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/post/${userId}/posts`)
      setUserPosts(res.data)
    }

    fetchPosts()
  }, [userId])



  return (
    <div>
      {
        isMyId &&
        <CreatePost profileImage={'/assets/person/1.jpeg'} />
      }
      {userPosts.map((post) => {
        return <UserPost key={post._id} post={post} />

      })}
    </div>
  )
}

export default RightProfileContent