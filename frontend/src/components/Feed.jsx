import React, { useContext, useEffect, useState } from 'react'
import './feed.css'
// import { CloseTwoTone, MoreHorizTwoTone, PublicTwoTone, VideoCameraFrontTwoTone, PhotoLibraryTwoTone, SentimentSatisfiedAltTwoTone, FavoriteTwoTone, ThumbUpAltTwoTone, ReplyTwoTone, CommentTwoTone } from '@mui/icons-material';
import CreatePost from './createPost';
import UserPost from './UserPost';
import axios from 'axios'
import { AuthContext } from '../context/AuthContext';

const Feed = () => {
  const [posts, setPosts] = useState([])
  const {user} = useContext(AuthContext)
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/v1/post/user/timeline/${user._id}`)
        console.log(res)
        if (Array.isArray(res.data)) {

          setPosts(res.data)
        }
      } catch (error) {
        console.log(error)
      }
      // console.log(res.data)
    }
    fetchPosts()
    console.log(posts)
  }, [])

  return (
    <div className='feedContainer'>
      <CreatePost />

      { posts.map((post)=>{
        // console.log(post)
        return <UserPost key={post._id} post={post}/>

      })}
      {/* <UserPost  profileImage={'/assets/person/2.jpeg'} postImage={'/assets/post/3.jpeg'} username={"John Doe"} postCaption={"Very nice"}/>
      <UserPost  profileImage={'/assets/person/3.jpeg'} postImage={'/assets/post/4.jpeg'} username={"Chan Du"} postCaption={"Chan du hai mera nam"}/>
      <UserPost  profileImage={'/assets/person/5.jpeg'} postImage={'/assets/post/8.jpeg'} username={"Chan Lee"} postCaption={"Chan lee hai mera nam🙄"}/> */}



    </div>
  )
}

export default Feed