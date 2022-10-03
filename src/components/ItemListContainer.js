import React from 'react'
import ItemCounts from './ItemCounts'
import ItemList from './ItemList'
import FetchData from '../utils/FetchData'
import {useState, useEffect} from 'react'
import { useParams, NavLink } from 'react-router-dom'
import Prueba3 from './Prueba3'

const ItemListContainer = ({greeting})=> {
  const [state, setState] = useState({prod:[]})

  
  useEffect(()=> {
    FetchData(true).then((value)=>{
      setState(value)

    }).catch((value)=>{
      setState(value)
    })
  }, [])

    return(
      <div>
        <p>{greeting}</p>
        <ItemCounts></ItemCounts>
        <ItemList items={state}></ItemList>
        {/* <Prueba3 test={state}></Prueba3> */}
        
      </div>
    ) 
    
  }
  
  export default ItemListContainer;