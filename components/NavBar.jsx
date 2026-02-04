import React from 'react'

const NavBar = () => {
  return (
    <div className='border-2 border-black flex items-center justify-between p-10 text-xl top-0 z-30 sticky'>
        <h1>MyLogo</h1>
        <div className='flex items-center justify-between gap-5'>
            <h2>Dark</h2>
            <h2>Add product</h2>
            <h2>Timer</h2>
            <h2>About us</h2>
        </div>
    </div>
  )
}

export default NavBar;