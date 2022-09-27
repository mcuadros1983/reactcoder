import React from 'react'
import ItemCounts from './ItemCounts'
import ItemList from './ItemList'
import FetchData from '../utils/FetchData'
import {useState, useEffect} from 'react'

// const ItemListContainer = ({greeting}) => {
//   return (
//     <div>
//       <p>{greeting}</p>
//       <ItemCounts></ItemCounts>
//       <ItemList></ItemList>
//     </div>
//   )

// }

function ItemListContainer(){
  const [state, setState] = useState({items:[]})
  
  useEffect(()=> {
    FetchData(true).then((value)=>{
      setState(value)
    }).catch((value)=>{
      setState(value)
    })
  }, [])
    return(
      <div className='App'>
        <ItemList items={state}></ItemList>
        
  
      </div>
    )
  }
  
  export default ItemListContainer;

// export default ItemListContainer


//--------------

// import React from "react";
// import Item from "./Item";
// import React, { useEffect, useState } from 'react';

// const [state,setState] = useState([]);

// useEffect=(()=>{
//     setState(Item);
// },[])
//     return(
//         <div>
//             <Item></Item>
//         </div>
//     )
//---------------------

// import ItemList from './ItemList'

