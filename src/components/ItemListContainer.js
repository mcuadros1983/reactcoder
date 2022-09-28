import React from 'react'
import ItemCounts from './ItemCounts'
import ItemList from './ItemList'
import FetchData from '../utils/FetchData'
import {useState, useEffect} from 'react'

function ItemListContainer({greeting}){
  const [state, setState] = useState({prod:[]})
  
  useEffect(()=> {
    FetchData(true).then((value)=>{
      setState(value)

    }).catch((value)=>{
      setState(value)
    })
  }, [])
    return(
      <div className='App'>
        <p>{greeting}</p>
        <ItemCounts></ItemCounts>
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

