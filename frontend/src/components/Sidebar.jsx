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
            <div className="yourShortcut">
              <span >Your shortcuts</span>
              <span className='editbtn'>Edit</span>
            </div>

            <li className='sidebarListItem'>
              <img src="/assets/post/2.jpeg" className='sidebarShorcut' alt="" />
              <span className='sidebarListItemText'>Jane Doe</span>
            </li>
            <li className='sidebarListItem'>
              <img src="/assets/post/3.jpeg" className='sidebarShorcut' alt="" />
              <span className='sidebarListItemText'>Jane Doe</span>
            </li>
            <li className='sidebarListItem'>
              <img src="/assets/post/4.jpeg" className='sidebarShorcut' alt="" />
              <span className='sidebarListItemText'>Jane Doe</span>
            </li>
            <li className='sidebarListItem'>
              <img src="/assets/post/5.jpeg" className='sidebarShorcut' alt="" />
              <span className='sidebarListItemText'>Jane Doe</span>
            </li>

            <li className='sidebarListItem '>
              <KeyboardArrowDownTwoTone className='sidebarIcon seemore' />
              <span className='sidebarListItemText'>See more</span>
            </li>
          </ul>

          <div className="linksList">
            <p className='linkItem'>Privacy</p>
            <p className=''> . </p>
            <p className='linkItem'>Terms</p>
            <p className=''> . </p>
            <p className='linkItem'>Advertising</p>
            <p className=''> . </p>
            <p className='linkItem'>Ad Choices ;</p>
            <p className=''> . </p>
            <p className='linkItem'>Cookies</p>
            <p className=''> . </p>
            <p className='linkItem'>More</p>
            <p className=''> . </p>
            <p className='linkItem'>Theophil © 2025</p>

          </div>
        </div>
    </div>
  )
}

export default Sidebar