import React from 'react'
import Logo from './MovieLogo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
        <img src={Logo} className='w-[50px]'/>

         {/* <a href='/'>Movies</a>
        // <a href='/Watchlist'>WatchList</a> */ }
        {/* Anchor tags relods whole page to make to advance i used link */}

        <Link to='/'>Movies</Link>
        <Link to='/Watchlist'>WatchList</Link>
    </div>
  )
}

export default Navbar