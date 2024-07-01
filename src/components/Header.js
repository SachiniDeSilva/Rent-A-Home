import React from 'react'


import {Link} from 'react-router-dom'
import logo from '../assets/Rent-AHome.png'

const Header = () => {
  return (
    <header className='py-3 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
        <img className='w-2/5  h-auto'  src={logo} alt=''/>
    </Link>
    <div className='flex items-center gap-6'>
      <Link  className='hover:text-sky-500 transition' to=''>
      Log in
      </Link>
      <Link className='bg-sky-500 hover:bg-sky-400 text-white px-4 py-3 rounded-lg transition'  to=''>
      Sign up
      </Link>

    </div>


      </div>



    </header>
  )
}

export default Header