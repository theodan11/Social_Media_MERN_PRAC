import React from 'react'
import './rightSidebar.css'
import { Search, MoreHoriz} from '@mui/icons-material'
import ContactItems from './ContactItems'


const RightSidebar = () => {
  return (
    <div className='rightSidebarContainer'>
      <div className="rightSidebarWrapper">
        <div className="sponserContainer">
          <h3>Sponser</h3>
        </div>
        <hr />
        <div className="contactsContainer">
          <div className="contactHeader">
            <h3>Contacts</h3>
            <div className="contactsActions">
              <div className="actionItem">
                <Search />
              </div>
              <div className="actionItem">
                <MoreHoriz />
              </div>
            </div>
          </div>
          <div className="contacts">
            <ContactItems Image={"/public/assets/person/1.jpeg"} name={"Jane Doe"} isOnline={true}/>
            <ContactItems Image={"/public/assets/person/2.jpeg"} name={"John Doe"}/>
            <ContactItems Image={"/public/assets/person/3.jpeg"} name={"Jando Doe"}  isOnline={true}/>
            <ContactItems Image={"/public/assets/person/4.jpeg"} name={"Chan Lee"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar