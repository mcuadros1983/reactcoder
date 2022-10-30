import React from 'react'
import ItemDetail from './ItemDetail'
import FetchData from '../utils/FetchData'
import {useState, useEffect} from 'react'
import { useParams, NavLink } from 'react-router-dom'
import Item from "./Item";
// import {doc, getDoc, getFirestore} from 'firebase/firestore';
import {collection, getDocs, getFirestore, query, where, getDoc, doc} from 'firebase/firestore';
import { filterCollection } from '../utils/Fiberbase'

function ItemDetailContainer(){
  const [item,setItem]=useState([])
  const {id} = useParams()
  const [category, setCategory] = useState([])

//   useEffect(() => {
//     const res = filterCollection('items',["id","==",parseInt(id)])
//     res.then((res)=>{
//       setItem(res.docs.map((value)=>value.data())[0])
//     })
//   return () => {
//   }
// }, [])

  useEffect(()=> {
    const db = getFirestore()
    const data = query(collection(db, 'items'), where("id", "==", parseInt(id)))
    getDocs(data)
      .then((value)=>{
        setItem(value.docs.map((value)=> value.data())[0]);
      });
      return ()=> {
      }
    }, [])

    console.log(item)




    return(
      <div>
        {/* {category.map((value)=>{
          // return <nav key={value.id}>{value.title}</nav>
          return <NavLink to={`/items/${value.category}`}  key={value.id}>{value.id}</NavLink>
        })} */}
        <ItemDetail details={item}/>
      </div>
    )

}


  export default ItemDetailContainer;