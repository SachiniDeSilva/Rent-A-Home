import React from 'react'


import {Link} from 'react-router-dom'
import logo from '../assets/Rent-AHome.png'

const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
        <img src={logo} alt=''/>
    </Link>
    <div className='flex items-center gap-6'>
      <Link  className='hover:text-sky-400 transition' to=''>
      Log in
      </Link>
      <Link className='bg-sky-400 hover:bg-sky-300 text-white px-4 py-3 rounded-lg transition'  to=''>
      Sign up
      </Link>

    </div>


      </div>



    </header>
  )
}

export default Header