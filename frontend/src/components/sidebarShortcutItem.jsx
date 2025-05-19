import React from 'react'

const SidebarShortcutItem = ({image, text}) => {
    return (
        <li className='sidebarListItem'>
            <img src={image || `/assets/default_dp.jpg`} className='sidebarShorcut' alt="" />
            <span className='sidebarListItemText'>{text}</span>
        </li>
    )
}

export default SidebarShortcutItem