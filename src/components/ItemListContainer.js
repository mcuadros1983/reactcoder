import React from 'react'
import ItemList from './ItemList'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';

const ItemListContainer = ({greeting})=> {
  const [state, setState] = useState([])
  const { categoryId } = useParams("")

useEffect(()=> {
  const db = getFirestore()
  if (!categoryId){
      const data = collection(db, 'items')
      getDocs(data)
      .then((value)=>{
        setState(value.docs.map((value)=>{
        return value.data() 
      }));
    });
  } else {
    const data = query(collection(db, 'items'), where("categoryId", "==", parseInt(categoryId))) 
    getDocs(data)
      .then((value)=>{
        console.log(value.data)
        setState(value.docs.map((value)=> value.data()));
        console.log(state)
      });
      return ()=> {
      }
  }
  }, [categoryId])

    return(
      <div>
        <ItemList items={state}></ItemList>
      </div>
    ) 
    
  }
  
  export default ItemListContainer;