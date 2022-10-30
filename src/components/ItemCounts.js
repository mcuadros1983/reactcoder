import React from 'react'
import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Contexts from '../context/Contexts';
import '../App.css';

const ItemCounts = ({initial, onAdd, item})=>{
  const contexto = useContext(Contexts.cartContext)
  const [myState,setMyState] = useState(parseInt(initial)); 

  function cambioContador(value) {
    if (value === 'suma') {
      setMyState(myState + 1); 
    }
    else if (value === 'resta' && myState >= 1) {
      setMyState(myState - 1);
     
    }
  }
  
  return(
    <React.Fragment>
      <div>
        <Button onClick={() => cambioContador('suma')} variant="secondary">+</Button>&nbsp;&nbsp;
        <span>{myState}</span>&nbsp;&nbsp;
        <Button onClick={() => cambioContador('resta')} variant="secondary">-</Button>&nbsp;&nbsp;
        <Button onClick={()=> {contexto.addToCart(item,myState);}} variant="secondary" >Agregar al carrito</Button><br/><br/>
      </div>
    </React.Fragment>
  );
}

export default ItemCounts;