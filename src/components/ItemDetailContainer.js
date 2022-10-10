import React from 'react'
import ItemDetail from './ItemDetail'
import FetchData from '../utils/FetchData'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Item from "./Item";

function ItemDetailContainer(){
  const [item,setItem]=useState({})
  const {id} = useParams()

  useEffect(()=> {
    FetchData(true)
    .then((value)=>{
      setItem(value.prod.find(element => element.id === Number(id)));
    })
    .catch((error)=>console.log(error))
  }, [])
    return(
      <div>
        <ItemDetail details={item}/>
      </div>
    )

}


  export default ItemDetailContainer;