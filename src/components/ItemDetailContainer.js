import React from 'react'
import ItemDetail from './ItemDetail'
import FetchData from '../utils/FetchData'
import {useState, useEffect} from 'react'
import { useParams, NavLink } from 'react-router-dom'
import Item from "./Item";
// import {doc, getDoc, getFirestore} from 'firebase/firestore';
import {collection, getDocs, getFirestore, query, where, getDoc, doc} from 'firebase/firestore';



function ItemDetailContainer(){
  const [item,setItem]=useState({})
  const {id} = useParams()
  const [category, setCategory] = useState({})


  useEffect(()=> {
    const db = getFirestore()
    const data = collection(db, 'items')
    getDocs(data)
    .then((value)=>{
      setCategory(value.docs.filter(element => element.id === Number(id)));
      console.log(category)
    })
    .catch((error)=>console.log(error))
  }, [])
      

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