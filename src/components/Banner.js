import React from 'react'
import Image from '../assets/OIP (1).jpg'
import Search from '../components/Search'

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-sky-400'>Rent</span> Your Dream House With Us.
          </h1>
          <p className='text-semibold text-xl'>
            
          We've all been there. Look no further than Rent-A-Home! We're a revolutionary hose rental platform that makes finding and renting the ideal hose for your needs quick, easy, and hassle-free.
            


          </p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img className='rounded-ee-[90px] rounded-tl-[90px] min-h-80' src={Image} alt=''/>
        </div>
      </div>
      <Search/>
    </section>
  )
}

export default Banner