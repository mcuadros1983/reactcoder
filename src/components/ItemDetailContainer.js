import React from 'react'
import ItemDetail from './ItemDetail'
import FetchData from '../utils/FetchData'
import {useState, useEffect} from 'react'

function ItemDetailContainer({greeting}){
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
        <ItemDetail details={state}></ItemDetail>
        
      </div>
    ) 
    
  }
  
  export default ItemDetailContainer;