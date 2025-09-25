import React, { useContext } from 'react'
import './sidebar.css'
import { PeopleAlt, Bookmark, OndemandVideo, Groups, Restore, RssFeed, Storefront, KeyboardArrowDownTwoTone } from '@mui/icons-material';
import SidebarListItem from './sidebarListItem';
import SidebarShortcutItem from './sidebarShortcutItem';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';



const Sidebar = () => {
  const { user } = useContext(AuthContext)

  return (
    <div className='sidebar'>
      <div className="sidebarContainer">
        <ul className='sidebarList'>
          <li style={{ "listStyle": "none" }}>
            <Link className='sidebarListItem' to={`/profile/${user._id}`} style={{ textDecoration: "none", color: 'inherit' }}>
              <img src={user.profilePicture || "/assets/default_dp.jpg"} className='sidebarProfileImage' alt="" />
              <span className='sidebarListItemText'>{user.username}</span>
            </Link>
          </li>
          <SidebarListItem Icon={PeopleAlt} text={'Friends'} />
          <SidebarListItem Icon={Bookmark} text={'Saved'} />
          <SidebarListItem Icon={Restore} text={'Memories'} />
          <SidebarListItem Icon={Groups} text={'Groups'} />
          <SidebarListItem Icon={OndemandVideo} text={'Video'} />
          <SidebarListItem Icon={Storefront} text={'Marketplace'} />
          <SidebarListItem Icon={RssFeed} text={'Feeds'} />
          <SidebarListItem Icon={KeyboardArrowDownTwoTone} text={'See more'} extraClass='seemore' />
          <hr className='hrSidebar' />






          <div className="yourShortcut">
            <span >Your shortcuts</span>
            <span className='editbtn'>Edit</span>
          </div>


          <SidebarShortcutItem image={"/assets/post/2.jpeg"} text={"Jane Doe"} />
          <SidebarShortcutItem image={"/assets/post/3.jpeg"} text={"John Doe"} />
          <SidebarShortcutItem image={"/assets/post/4.jpeg"} text={"John Cart"} />
          <SidebarShortcutItem image={"/assets/post/5.jpeg"} text={"Add Cart"} />





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