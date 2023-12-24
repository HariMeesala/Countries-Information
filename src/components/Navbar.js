import React, { useState } from 'react'
import './Navbar.css'

export default function Navbar({theme, setTheme}) {

  const handleMOde = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  const lightStyle = {
    backgroundColor: 'hsl(0, 0%, 100%)',
    color: '#000'

  }

  const darkStyle = {
    backgroundColor: 'hsl(209, 23%, 22%)',
    color: 'hsl(0, 0%, 100%)'
  }


  return (
    <div className='nav-bar' style={theme === 'light' ? lightStyle : darkStyle} >
        <div className='nav-items'>
            <h2>Where in the world?</h2>
            <div className='nav-theme' onClick={handleMOde} style={theme === 'light' ? lightStyle : darkStyle} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.0" stroke="currentColor" data-slot="icon" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
                <p>Dark Mode</p>

            </div>
        </div>

    </div>
  )
}
