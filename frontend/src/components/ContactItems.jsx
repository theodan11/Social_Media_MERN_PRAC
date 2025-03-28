import React from 'react'
import './rightSidebar.css'

const ContactItems = ({ Image, name, isOnline }) => {
  return (
    <div className="contactItem">
      <img src={Image} alt="" />
      <p>{name}</p>
      {isOnline &&
        <div className="onlineIndicator"></div>
      }
    </div>
  )
}

export default ContactItems