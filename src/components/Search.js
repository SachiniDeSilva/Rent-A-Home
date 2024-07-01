import React, { useContext, useState } from 'react'
import CountryDropDown from '../components/CountryDropdown'
import PropertyDropDown from '../components/PropertyDropdown'
import PriceRangeDropDown from '../components/PriceRangeDropDown'

import {RiSearch2Line} from 'react-icons/ri'
import { HouseContext } from './HouseContext'


const Search = () => {

 const {handleClick} = useContext (HouseContext)
  
  return (
    <div className='px-[30px] py-6 max-w-[1000px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white 
    lg:bg-transparent lg:backdrop-blur rounded-lg'>
    <CountryDropDown/>
    <PropertyDropDown/>
    <PriceRangeDropDown/>
    <button onClick={()=> handleClick()} className='bg-sky-500 hover:bg-sky-400 transition w-full lg:max-w-[120px] h-10 rounded-lg flex justify-center items-center text-white text-lg '>
   <RiSearch2Line/>
    </button>
    </div>
  )
}

export default Search