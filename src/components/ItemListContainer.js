import React from 'react'
import ItemList from './ItemList'
import FetchData from '../utils/FetchData'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting})=> {
  const [state, setState] = useState({prod:[]})
  const { categoryId } = useParams("")

  useEffect(()=> {
    FetchData(true).then((value)=>{
      if(!categoryId){
        setState(value)
      }else{
        //Para respetar la estructura de datos que usamos, el array debe estar dentro de la propiedad prod del estado
        const filtrado = {
        prod: value.prod.filter(e => e.categoryId == Number(categoryId))
        } 
        //Luego seteamos el estado en el array filtrado
        setState(filtrado)
      }

    }).catch((error)=>console.log(error))
  }, [categoryId])



    return(
      <div>
        <p>{greeting}</p>
        
        <ItemList items={state}></ItemList>
      </div>
    ) 
    
  }
  
  export default ItemListContainer;