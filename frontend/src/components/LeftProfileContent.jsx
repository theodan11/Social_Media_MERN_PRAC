import React from 'react'

const LeftProfileContent = ({user}) => {
  return (
    <div className='leftContentContainer'>
      <div className="introCard card">
        <h2 className='title'>Intro</h2>
        <p className='desc'>{user.desc}</p>
<hr />
      </div>

      <div className="leftContentPhotos card">
        <h2 className='title'>Photos</h2>
        

      </div>
      <div className="leftContentFriends card">
        <h2 className='title'>Friends</h2>
        <p className='friendsSub'>{user.followers?.length} friends</p>

      </div>
    </div>
  )
}

export default LeftProfileContent