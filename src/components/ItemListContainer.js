import React from 'react'
import ItemList from './ItemList'
import FetchData from '../utils/FetchData'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {collection, getDocs, getFirestore, query, where, getDoc, doc} from 'firebase/firestore';
import { filterCollection } from '../utils/Fiberbase'


const ItemListContainer = ({greeting})=> {
  const [state, setState] = useState([])
  // const [state, setState] = useState({prod:[]})
  const [category, setCategory] = useState([])
  const { categoryId } = useParams("")

//    useEffect(()=> {
//     const db = getFirestore()
//     const data = query(collection(db, 'items'), where("id", "==", 1)) 
//     getDocs(data)
//       .then((value)=>{
//         setCategory(value.docs.map((value)=> value.data())[0]);
//         console.log(category)
//       });
//       return ()=> {
//         console.log(category)
//       }
//     }, [])
    

//   useEffect(()=> {
//     const db = getFirestore()
//     const data = collection(db, 'items')
//     getDocs(data)
//       .then((value)=>{
//         setCategory(value.docs.map((value)=>{
//           return value.data() 
//         }));
//       });  
//     }, [])

// console.log(category)

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
        // console.log(value)
      }
  }
  }, [categoryId])

// console.log(category)



  // useEffect(()=> {
  //   FetchData(true).then((value)=>{
  //     if(!categoryId){
  //       setState(value)
  //     }else{
  //       //Para respetar la estructura de datos que usamos, el array debe estar dentro de la propiedad prod del estado
  //       const filtrado = {
  //       prod: value.prod.filter(e => e.categoryId == Number(categoryId))
  //       } 
  //       //Luego seteamos el estado en el array filtrado
  //       setState(filtrado)
  //       console.log(categoryId)
  //     }

  //   }).catch((error)=>console.log(error))
  // }, [categoryId])
  


    return(
      <div>
        <p>{greeting}</p>
        
        <ItemList items={state}></ItemList>
      </div>
    ) 
    
  }
  
  export default ItemListContainer;