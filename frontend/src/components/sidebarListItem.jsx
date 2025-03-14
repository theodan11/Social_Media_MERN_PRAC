import React from 'react'

const SidebarListItem = ({Icon, text, extraClass=''}) => {
    return (
        <li className='sidebarListItem'>
            <Icon className={`sidebarIcon ${extraClass}`} />
            <span className='sidebarListItemText'>{text}</span>
        </li>
    )
}

export default SidebarListItem