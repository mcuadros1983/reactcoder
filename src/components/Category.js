import React from 'react'
import ItemDetail from './ItemDetail'
import FetchData from '../utils/FetchData'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Item from "./Item";


function Category(){
  const [cate,setCate]=useState({prod:[]})
  const { CateId } = useParams({})

  useEffect(()=> {
    FetchData(true)
    .then((value)=>{
        setCate(value.prod.filter(e => e.categoryId == CateId));
      console.log(value)
    })
    .catch((error)=>console.log(error))
  }, [])
    
  console.log(cate)
    return(
      <div>
        <ItemDetail details={cate}/>
      </div>
    )

}


  export default Category;