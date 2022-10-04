import React from 'react'
import ItemCounts from './ItemCounts'
import ItemList from './ItemList'
import FetchData from '../utils/FetchData'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Category from './Category'

const ItemListContainer = ({greeting})=> {
  const [state, setState] = useState({prod:[]})
  // const [cat,setCat]=useState({})
  // const {CatId} = useParams()

  useEffect(()=> {
    FetchData(true).then((value)=>{
      setState(value)
    }).catch((value)=>{
      setState(value)
    })
  }, [])

  // useEffect(()=> {
  //   FetchData(true)
  //   .then((value)=>{
  //     setCat(value.prod.find(element => element.categoryId === Number(CatId)));
      
  //   })
  //   .catch((error)=>console.log(error))
  // }, [])

    return(
      <div>
        <p>{greeting}</p>
        {/* <ItemCounts></ItemCounts> */}
        <ItemList items={state}></ItemList>
        {/* <ItemList items={cat}></ItemList> */}
        {/* <Category/> */}
      </div>
    ) 
    
  }
  
  export default ItemListContainer;