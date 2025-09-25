import { CloseTwoTone, CommentTwoTone, FavoriteTwoTone, MoreHorizTwoTone, PublicTwoTone, ReplyTwoTone, ThumbUpAltTwoTone } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'

const UserPost = ({ post }) => {
  // const [post, setpost] = useState(post)

  const [user, setUser] = useState([])

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/user/${post.userId}`)
      setUser(res.data)
    }

    fetchUser()

  }, [post?.userId])
  return (
    <div className="postContainer">
      <div className="titleContainer">
        <div className="picAndName">
          <Link to={`profile/${user._id}`}>

            <img srcSet={user.profilePicture || '../../public/assets/default_dp.jpg'} alt="" />
          </Link>
          <div className="nameAndDate">
            <Link style={{ textDecoration: "none", color: "inherit" }} to={`profile/${user._id}`}>
              <span className='name'>{user.username}</span>
            </Link>
            <span className='date'>{format(post.createdAt)} - <PublicTwoTone className='dateIcon' /></span>
          </div>
        </div>

        <div className="actions">
          <div className="actionIconContainer">

            <MoreHorizTwoTone className='actionIcon' />
          </div>
          <div className="actionIconContainer">
            <CloseTwoTone className='actionIcon' />

          </div>
        </div>
      </div>

      <div className="postContentContainer">
        <p className='postCaption'>{post.content}</p>
        <img srcSet={"http://localhost:8000/images/" + post.image || ''} className='postImage' alt="" />
      </div>
      <div className="likeCommentAndShareCount">
        <div className="likeContainer">
          {/* <ThumbUpAltTwoTone /> */}
          <img src='/assets/heart.png' />
          {/* <FavoriteTwoTone /> */}
          <span>{post.likes.length}</span>
        </div>
        <div className="commentAndShareCount">
          <span >20 comments</span>
          <span >30 shares</span>
        </div>

      </div>
      <hr />
      <div className="likeCommentAndShareBtn">
        <div className="lcsBtnContainer likeContainer">
          <ThumbUpAltTwoTone />
          <span>Like</span>
        </div>
        <div className="lcsBtnContainer">
          <CommentTwoTone />
          <span>Comment</span>
        </div>
        <div className="lcsBtnContainer">
          <ReplyTwoTone />
          <span>Share</span>
        </div>
      </div>
    </div>


  )
}

export default UserPost