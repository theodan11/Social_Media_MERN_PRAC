import { CloseTwoTone, CommentTwoTone, FavoriteTwoTone, MoreHorizTwoTone, PublicTwoTone, ReplyTwoTone, ThumbUpAltTwoTone } from '@mui/icons-material'
import React from 'react'

const UserPost = ({profileImage, postImage, username, postCaption}) => {
  return (
    <div className="postContainer">
        <div className="titleContainer">
          <div className="picAndName">

            <img src={profileImage} alt="" />
            <div className="nameAndDate">
              <span className='name'>{username}</span>
              <span className='date'>March 9 at 9:02 PM - <PublicTwoTone className='dateIcon' /></span>
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
          <p className='postCaption'>{postCaption}</p>
          <img src={postImage} className='postImage' alt="" />
        </div>
        <div className="likeCommentAndShareCount">
          <div className="likeContainer">
            <ThumbUpAltTwoTone />
            <FavoriteTwoTone />
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