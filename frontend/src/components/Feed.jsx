import React, { useContext, useEffect, useState } from 'react'
import './feed.css'
import CreatePost from './CreatePost';
import UserPost from './UserPost';
import axios from 'axios'
import { AuthContext } from '../context/AuthContext';
import { useLocation } from 'react-router-dom';

const Feed = () => {
  const location = useLocation()
  const [posts, setPosts] = useState([])
  const { user } = useContext(AuthContext)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/post/user/timeline/${user._id}`)
        if (Array.isArray(res.data)) {

          setPosts(res.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchPosts()
  }, [])

  return (
    <div className='feedContainer'>


      < CreatePost />

      {posts.map((post) => {
        return <UserPost key={post._id} post={post} />
      })}



    </div>
  )
}

export default Feed