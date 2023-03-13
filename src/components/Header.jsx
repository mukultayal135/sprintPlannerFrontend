import React from 'react'
import SidePanel from './sidePanel'
import './Header.css'

export default function Header() {
    return(
        <div className='header'>
            <div className='heading'>
            <SidePanel/>
            <h1 >Sprint Planner</h1>
            </div>
        </div>
    )
}