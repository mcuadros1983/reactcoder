import React from 'react'
import ItemDetail from './ItemDetail'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';

function ItemDetailContainer(){
  const [item,setItem]=useState([])
  const {id} = useParams()
  const [category, setCategory] = useState([])

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

    return(
      <div>
        <ItemDetail details={item}/>
      </div>
    )

}
  export default ItemDetailContainer;