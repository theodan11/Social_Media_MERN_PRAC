import React from 'react'

import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import RightSidebar from '../components/RightSidebar'
import './home.css'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <>
      
      
        <div className="homeContainer">
            <Sidebar/>
            <Feed/>
            <RightSidebar/>
        </div>
        </>
    )
}

export default Home