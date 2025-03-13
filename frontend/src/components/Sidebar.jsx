import React from 'react'
import './sidebar.css'
import {PeopleAlt,Bookmark, OndemandVideo, Groups, Restore, RssFeed,Storefront, KeyboardArrowDownTwoTone} from '@mui/icons-material';



const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarContainer">
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <img src="/assets/person/1.jpeg" className='sidebarProfileImage' alt="" />
              <span className='sidebarListItemText'>Jane Doe</span>
            </li>
            <li className='sidebarListItem'>
              <PeopleAlt className='sidebarIcon'/>
              <span className='sidebarListItemText'>Friends</span>
            </li>
            <li className='sidebarListItem'>
              <Bookmark className='sidebarIcon'/>
              <span className='sidebarListItemText'>Saved</span>
            </li>
            <li className='sidebarListItem'>
              <Restore className='sidebarIcon' />
              <span className='sidebarListItemText'>Memories</span>
            </li>
            <li className='sidebarListItem'>
              <Groups className='sidebarIcon'/>
              <span className='sidebarListItemText'>Groups</span>
            </li>
            <li className='sidebarListItem'>
              <OndemandVideo className='sidebarIcon'/>
              <span className='sidebarListItemText'>Video</span>
            </li>
            <li className='sidebarListItem'>
              <Storefront className='sidebarIcon' />
              <span className='sidebarListItemText'>Marketplace</span>
            </li>
            <li className='sidebarListItem'>
              <RssFeed className='sidebarIcon' />
              <span className='sidebarListItemText'>Feeds</span>
            </li>
            
            <li className='sidebarListItem '>
              <KeyboardArrowDownTwoTone className='sidebarIcon seemore' />
              <span className='sidebarListItemText'>See more</span>
            </li>
           <hr className='hrSidebar'/>
            
          </ul>
        </div>
    </div>
  )
}

export default Sidebar