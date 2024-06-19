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
      loading
    }}>{children}</HouseContext.Provider>
  )
}

export default HouseContextProvider