import React from 'react'
import ItemDetail from './ItemDetail'
import FetchData from '../utils/FetchData'
import {useState, useEffect} from 'react'

function ItemDetailContainer(){
  const [state, setState] = useState({prod:[]})
  
  useEffect(()=> {
    FetchData(true).then((value)=>{
      setState(value.prod.find(element => element.id === 2));
    }).catch((value)=>{
      setState(value.prod.find(element => element.id === 2));
    })
  }, [])

    return(
      <div>
        <ItemDetail details={state}></ItemDetail>
      </div>
    ) 
}


  export default ItemDetailContainer;