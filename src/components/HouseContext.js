import React from 'react'
import { useState,useEffect,createContext } from 'react'
import {housesData} from '../data'


export const HouseContext =createContext()
const HouseContextProvider = ({children}) => {
  const [houses,setHouses] =useState(housesData);
  const [country,setCountry] =useState('Location(any)');
  const [countries,setCountries] =useState([]);
  const [property,setProperty] =useState('Property type(any)')
  const [properties,setProperties] =useState([]);
  const [price,setPrice] =useState('Price range (any)');
  const [loading,setLoading] =useState(false);

  useEffect(()=> {
    const allCountries = houses.map(()=>{
      return houses.country;
    })
    
    const uniqueCountries = ['Location (any)', new Set(allCountries)];


    setCountries(uniqueCountries)
  },[])
/*property*/

useEffect(()=> {
  const allProperties = houses.map(()=>{
    return houses.type;
  })
  
  const uniqueproperties = ['Location (any)', new Set(allProperties)];


  setProperties(uniqueproperties)
},[])

const handleClick = () => {
  



  const isDefault = (str) => {
    return str.split('').includes('(any)')
  };

  const minPrice = parseInt(price.split('')[0]);


  const maxPrice = parseInt(price.split('')[2])


  const newHouses = housesData.filter((house) =>{
    const housePrice = parseInt(house.price)

    if(house.country === country && house.type === property && housePrice >= minPrice && housePrice <= maxPrice) {
      return house
    }
  });
  return newHouses;
}
  return (
    <HouseContext.Provider value={{
      country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      price,
      setPrice,
      houses,
      loading,
      handleClick,
    }}>{children}</HouseContext.Provider>
  )
}

export default HouseContextProvider