import React from 'react'
import './rightSidebar.css'
import { Avatar } from '@mui/material'

const ContactItems = ({ Image, name, isOnline }) => {
  return (
    <div className="contactItem">
      {Image != "" ? <img src={Image} alt="" /> : <Avatar />}

      <p>{name}</p>
      {isOnline &&
        <div className="onlineIndicator"></div>
      }
    </div>
  )
}

export default ContactItems