import React from 'react'
import Image from '../assets/OIP (1).jpg'
import Search from '../components/Search'

const Banner = () => {
  return (
    <section>
      <div>
        <div>
          <h1>
            <span className='text-sky-400'>Rent</span> Your Dream House with Us.
          </h1>
          <p>
            lorem20


          </p>
        </div>
        <div>
          <img className='rounded-ee-full rounded-tl-full' src={Image} alt=''/>
        </div>
      </div>
    </section>
  )
}

export default Banner