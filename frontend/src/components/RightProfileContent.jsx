import React, { useContext, useEffect, useState } from 'react'
import CreatePost from './CreatePost'
import UserPost from './UserPost'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'

const RightProfileContent = ({ userId }) => {
  // const [user, setUser] = useState({})
  const { user } = useContext(AuthContext)
  const [userPosts, setUserPosts] = useState([])
  // console.log(userId)

  const isMyId = user._id === userId

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/post/${userId}/posts`)
      // console.log(res.data)
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
        // console.log(post)
        return <UserPost key={post._id} post={post} />

      })}

      {/* <UserPost  profileImage={'/assets/person/1.jpeg'} postImage={'/assets/post/1.jpeg'} username={"Jane Doe"} postCaption={"Good morning to night!🤣"}/>
      <UserPost  profileImage={'/assets/person/2.jpeg'} postImage={'/assets/post/3.jpeg'} username={"John Doe"} postCaption={"Very nice"}/>
      <UserPost  profileImage={'/assets/person/3.jpeg'} postImage={'/assets/post/4.jpeg'} username={"Chan Du"} postCaption={"Chan du hai mera nam"}/>
      <UserPost  profileImage={'/assets/person/5.jpeg'} postImage={'/assets/post/8.jpeg'} username={"Chan Lee"} postCaption={"Chan lee hai mera nam🙄"}/> */}


    </div>
  )
}

export default RightProfileContent