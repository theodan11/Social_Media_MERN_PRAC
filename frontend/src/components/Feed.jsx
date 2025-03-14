import React from 'react'
import './feed.css'
import { CloseTwoTone, MoreHorizTwoTone, PublicTwoTone, VideoCameraFrontTwoTone, PhotoLibraryTwoTone, SentimentSatisfiedAltTwoTone, FavoriteTwoTone, ThumbUpAltTwoTone, ReplyTwoTone, CommentTwoTone } from '@mui/icons-material';
import CreatePost from './createPost';
import UserPost from './UserPost';

const Feed = () => {
  return (
    <div className='feedContainer'>
      <CreatePost profileImage={'/assets/person/1.jpeg'} />


      <UserPost  profileImage={'/assets/person/1.jpeg'} postImage={'/assets/post/1.jpeg'} username={"Jane Doe"} postCaption={"Good morning to night!🤣"}/>
      <UserPost  profileImage={'/assets/person/2.jpeg'} postImage={'/assets/post/3.jpeg'} username={"John Doe"} postCaption={"Very nice"}/>
      <UserPost  profileImage={'/assets/person/3.jpeg'} postImage={'/assets/post/4.jpeg'} username={"Chan Du"} postCaption={"Chan du hai mera nam"}/>



    </div>
  )
}

export default Feed