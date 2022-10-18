import React from 'react'
import { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Contexts from '../context/Contexts';
import '../App.css';
import {useNavigate, NavLink} from 'react-router-dom';

const ItemCounts = ({show, initial, onAdd, item, onClick})=>{
  const contexto = useContext(Contexts.cartContext)
  const [myState,setMyState] = useState(parseInt(initial)); 
  let navigate =useNavigate()

  // setMyState(parseInt(initial) + myState)

  function cambioContador(value) {
    if (value === 'suma') {
      setMyState(myState + 1); 
    }
    else if (value === 'resta' && myState >= 1) {
      setMyState(myState - 1);
     
    }
  }

  const navigateCarrito = () => {
      navigate("/carrito")
  };

  // useEffect(() => {
  //   onAdd(myState)
  // }, [myState])
  
  // const handleOnChange  = ()=>{
  //   onAdd(myState)

  //   }

  // function getClassName(mostrar) {
  //   if (mostrar) {
  //     return 'mostrar';
  //   }else{
  //    return 'borrar';
  //   }
  // }
  
  return(
    <React.Fragment>
      {/* <div className={getClassName(show)}> */}
      <div>
        <Button onClick={() => cambioContador('suma')} variant="secondary">+</Button>&nbsp;&nbsp;
        <span>{myState}</span>&nbsp;&nbsp;
        <Button onClick={() => cambioContador('resta')} variant="secondary">-</Button>&nbsp;&nbsp;
        <Button onClick={()=> {contexto.addToCart(item,myState);}} variant="secondary" >Agregar al carrito</Button><br/><br/>
        
        {contexto.pendientes() >0 && (
          // <Button onClick={()=>addToCart(item,myState)}>CHECKOUT</Button>
          <Button onClick={navigateCarrito}>CHECKOUT</Button>
        )} 

      </div>
    </React.Fragment>
  );
}

export default ItemCounts;