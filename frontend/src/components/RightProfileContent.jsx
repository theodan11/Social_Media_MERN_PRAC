import React, { useEffect, useState } from 'react'
import CreatePost from './createPost'
import UserPost from './UserPost'
import axios from 'axios'

const RightProfileContent = ({userId}) => {
  const [user, setUser] = useState({})
  const [userPosts, setUserPosts] = useState([])
console.log(userId)
  useEffect(()=>{
    const fetchPosts = async()=>{
      const res = await axios.get(`http://localhost:8000/api/v1/post/${userId}/posts`)
      // console.log(res.data)
      setUserPosts(res.data)
    }

    fetchPosts()
  },[])



  return (
    <div>
      <CreatePost profileImage={'/assets/person/1.jpeg'}/>

      { userPosts.map((post)=>{
        // console.log(post)
        return <UserPost key={post._id} post={post}/>

      })}
     
      {/* <UserPost  profileImage={'/assets/person/1.jpeg'} postImage={'/assets/post/1.jpeg'} username={"Jane Doe"} postCaption={"Good morning to night!🤣"}/>
      <UserPost  profileImage={'/assets/person/2.jpeg'} postImage={'/assets/post/3.jpeg'} username={"John Doe"} postCaption={"Very nice"}/>
      <UserPost  profileImage={'/assets/person/3.jpeg'} postImage={'/assets/post/4.jpeg'} username={"Chan Du"} postCaption={"Chan du hai mera nam"}/>
      <UserPost  profileImage={'/assets/person/5.jpeg'} postImage={'/assets/post/8.jpeg'} username={"Chan Lee"} postCaption={"Chan lee hai mera nam🙄"}/> */}


    </div>
  )
}

export default RightProfileContent