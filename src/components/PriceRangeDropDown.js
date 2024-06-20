import React,{useState,useEffect, useContext} from 'react'


import {RiWallet3Line,RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri'
import {Menu} from '@headlessui/react'
import { HouseContext } from './HouseContext'
import { RxValue } from 'react-icons/rx'

const PriceRangeDropdown = () => {
  const {price, setPrice } =useContext(HouseContext)

  const [isOpen, setIsOpen] =useState(false);

  const prices =[
    {
      value: 'Price range (any)'
    },
    {

    value :'10000 - 13000'
    },
    {

      value :'13000 - 16000'
      },
      {

        value :'16000 - 19000'
        }
  ]




  return (
    <Menu as='div' className='dropdown relative '>
      <Menu.Button onClick={()=> setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
        <RiWallet3Line className='dropdown-icon-primary'/>
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'>Choose Price Range</div>
          {
            isOpen ? (
              <RiArrowUpSLine className='dropdown-icon-secondary '/>
            ) :
          (
            <RiArrowDownSLine className='dropdown-icon-secondary'/>
          )
          }
        </div>
      </Menu.Button>




      <Menu.Items className='dropdown-menu'>
        {
        prices.map((price,index)=> {
            return(
              <Menu.Item 
              onClick={()=> setPrice(price.value)}
              className='cursor-pointer hover:text-sky-400 transition' as='li' key={index}>
                {price.value}
              </Menu.Item>
            )
          })
        }
      </Menu.Items>
    </Menu>
  )
}

export default PriceRangeDropdown