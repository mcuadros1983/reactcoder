import React from 'react'
import ItemDetail from './ItemDetail'
import FetchData from '../utils/FetchData'
import {useState, useEffect} from 'react'
import { useParams, NavLink } from 'react-router-dom'
import Item from "./Item";
// import {doc, getDoc, getFirestore} from 'firebase/firestore';
import {collection, getDocs, getFirestore, query, where, getDoc, doc} from 'firebase/firestore';

// const db = getFirestore()

// const colRef = collection(db , "items")
// const qSnap = await getDocs(query(colRef, where("category", "==", "novillo")));

// if (qSnap.size) {
//   const data = qSnap.docs[0].data();
// } else {
//   console.log("No se encontro la categoria")
// }

function ItemDetailContainer(){
  const [item,setItem]=useState({})
  const {id} = useParams()
  const [category, setCategory] = useState({})

  // useEffect(()=> {
  //   const db = getFirestore()
  //   const data = doc(db, 'items', 'NGUsqa0smwJQC7Wv52xo')
  //   getDoc(data)
  //     .then((value)=>{
  //       console.log(value.data());
  //     })  }, [])

  // useEffect(()=> {
  //   const db = getFirestore()
  //   const data = collection(db, 'items')
  //   getDocs(data)
  //     .then((value)=>{
  //       setCategory(value.docs.map((value)=>{
  //         return value.data() 
  //       }));
  //     });  
  //   }, [])

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
      

  // useEffect(()=> {
  //   const db = getFirestore()
  //   const data = query(collection(db, 'items'), where("category", "==", "novillo"))
  //   // Ejemplo de aplicacion a proyecto
  //   // const documento = doc (db, "items", prop.name) 
  //   getDocs(data)
  //     .then((value)=>{
  //       setCategory(value.docs.map((value)=>{
  //         return value.data() 
  //       }));
  //       console.log(category)
  //     });
      
  //   }, [])

 
    

  // useEffect(()=> {
  //   const db = getFirestore()
  //    // const documento = doc (db, "items", prop.name) 
  //   const data = query(doc(db, "items"), where("category", "==", "novillo"))
  //   // Ejemplo de aplicacion a proyecto
  //   // const documento = doc (db, "items", prop.name) 
  //   getDocs(data)

  //   .then((value)=>{
  //     setItem(value);
  //     console.log(item)
  //   })
  //   .catch((error)=>console.log(error))
  // }, [])

  useEffect(()=> {
    FetchData(true)
    .then((value)=>{
      setItem(value.prod.find(element => element.id === Number(id)));
    })
    .catch((error)=>console.log(error))
  }, [])

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