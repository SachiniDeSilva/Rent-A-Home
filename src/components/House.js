import React from 'react'
import {BiBed ,BiBath, BiArea} from 'react-icons/bi'

const House = ({house }) => {

  const {image, type , country, address ,bedrooms, bathrooms, surface, price} = house;
  return (
    <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[320px] mx-auto cursor-pointer hover:shawdow-2xl transition'>
    <img src={image} alt='' className='w-full rounded-ee-[90px] rounded-tl-[90px] mb-8'/> 
    <div className='mb-4 flex gap-x-2 text-sm'>
      <div className='bg-green-500 rounded-full text-white px-3'>
        {type}
      </div>
      <div className='bg-sky-400 rounded-full px-3 text-white'>{country}</div>
     
    </div>
    <div className='text-lg font-semibold max-w-[260px]'>{address}</div>
    </div>


);
};

export default House