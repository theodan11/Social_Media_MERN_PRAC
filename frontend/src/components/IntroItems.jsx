import React from 'react'
import './introItems.css'


const IntroItems = ({Icon, text}) => {
    return (
        <>
        <div className="infoItem">
            
            <Icon />
            <span>{text}</span>
        </div>
        </>
    )
}

export default IntroItems