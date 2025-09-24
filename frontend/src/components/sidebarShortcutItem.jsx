import React from 'react'

const SidebarShortcutItem = ({ image, text, Icon }) => {
    return (
        <li className='sidebarListItem'>
            {

                Icon ? <Icon className='sidebarShorcut' /> : <img src={image || `/assets/default_dp.jpg`} className='sidebarShorcut' alt="" />
            }
            <span className='sidebarListItemText'>{text}</span>
        </li>
    )
}

export default SidebarShortcutItem