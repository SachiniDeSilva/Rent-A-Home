import React from 'react'
import {BiBed ,BiBath, BiArea} from 'react-icons/bi'

const House = ({house }) => {

  const {image, type , country, address ,bedrooms, bathrooms, surface, price} = house;
  return (
    <div>
    <img src={image} alt='' className=''/> 
    <div>
      <div>
        {type}
      </div>
      <div>{country}</div>
    </div>
    </div>


);
};

export default House