import React from 'react'
import { housesData } from '../data'

import { useParams } from 'react-router-dom'
import {BiBed,BiBath, BiArea} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const PropertyDetail = () => {
  const {id} = useParams();
  console .log (id)
  const house = housesData. find(house =>{
    return house.id === parseInt(id);
  });



  return (
    <div>PropertyDetail</div>
  )
}

export default PropertyDetail