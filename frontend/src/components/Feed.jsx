import React from 'react'
import './feed.css'
import { CloseTwoTone, MoreHorizTwoTone, PublicTwoTone, VideoCameraFrontTwoTone, PhotoLibraryTwoTone, SentimentSatisfiedAltTwoTone, FavoriteTwoTone, ThumbUpAltTwoTone, ReplyTwoTone, CommentTwoTone } from '@mui/icons-material';

const Feed = () => {
  return (
    <div className='feedContainer'>
      <div className="creatPost">
        <div className="des">


          <img src="/assets/person/1.jpeg" className='profileImage' alt="" />
          <div className="inputContainer">
            <input type="text" placeholder="What's on your mind, Jane?" />
          </div>
        </div>
        <hr />
        <div className="postBtns">
          <div className="btnItem">
            <VideoCameraFrontTwoTone className='btnIcon' />
            <span className='btnItemText'>Live video</span>
          </div>
          <div className="btnItem">
            <PhotoLibraryTwoTone className='btnIcon' />
            <span className='btnItemText'>Photo/video</span>
          </div>
          <div className="btnItem">
            <SentimentSatisfiedAltTwoTone className='btnIcon' />
            <span className='btnItemText'>Feeling/activity</span>
          </div>
        </div>
      </div>

      <div className="postContainer">
        <div className="titleContainer">
          <div className="picAndName">

            <img src="/assets/person/1.jpeg" alt="" />
            <div className="nameAndDate">
              <span className='name'>Jane Doe</span>
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
          <p className='postCaption'>Good morning to night!🤣</p>
          <img src="/assets/post/1.jpeg" className='postImage' alt="" />
        </div>
        <div className="likeCommentAndShareCount">
            <div className="likeContainer">
             <ThumbUpAltTwoTone/>
             <FavoriteTwoTone/>
            </div>
            <div className="commentAndShareCount">
              <span >20 comments</span>
              <span >30 shares</span>
            </div>
           
            </div>
            <div className="likeCommentAndShareBtn">
              <div className="lcsBtnContainer">
                <ThumbUpAltTwoTone/>
                <span>Like</span>
              </div>
              <div className="lcsBtnContainer">
                <CommentTwoTone/>
                <span>Comment</span>
              </div>
              <div className="lcsBtnContainer">
                <ReplyTwoTone/>
                <span>Share</span>
              </div>
      </div>
      </div>




      
      <div className="postContainer">
        <div className="titleContainer">
          <div className="picAndName">

            <img src="/assets/person/1.jpeg" alt="" />
            <div className="nameAndDate">
              <span className='name'>Jane Doe</span>
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
          <p className='postCaption'>Good morning to night!🤣</p>
          <img src="/assets/post/1.jpeg" className='postImage' alt="" />
        </div>
        <div className="likeCommentAndShareCount">
            <div className="likeContainer">
             <ThumbUpAltTwoTone/>
             <FavoriteTwoTone/>
            </div>
            <div className="commentAndShareCount">
              <span >20 comments</span>
              <span >30 shares</span>
            </div>
           
            </div>
            <div className="likeCommentAndShareBtn">
              <div className="lcsBtnContainer">
                <ThumbUpAltTwoTone/>
                <span>Like</span>
              </div>
              <div className="lcsBtnContainer">
                <CommentTwoTone/>
                <span>Comment</span>
              </div>
              <div className="lcsBtnContainer">
                <ReplyTwoTone/>
                <span>Share</span>
              </div>
      </div>
      </div>
      <div className="postContainer">
        <div className="titleContainer">
          <div className="picAndName">

            <img src="/assets/person/1.jpeg" alt="" />
            <div className="nameAndDate">
              <span className='name'>Jane Doe</span>
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
          <p className='postCaption'>Good morning to night!🤣</p>
          <img src="/assets/post/1.jpeg" className='postImage' alt="" />
        </div>
        <div className="likeCommentAndShareCount">
            <div className="likeContainer">
             <ThumbUpAltTwoTone/>
             <FavoriteTwoTone/>
            </div>
            <div className="commentAndShareCount">
              <span >20 comments</span>
              <span >30 shares</span>
            </div>
           
            </div>
            <div className="likeCommentAndShareBtn">
              <div className="lcsBtnContainer">
                <ThumbUpAltTwoTone/>
                <span>Like</span>
              </div>
              <div className="lcsBtnContainer">
                <CommentTwoTone/>
                <span>Comment</span>
              </div>
              <div className="lcsBtnContainer">
                <ReplyTwoTone/>
                <span>Share</span>
              </div>
      </div>
      </div>

      
    </div>
  )
}

export default Feed