import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';

const ItemCounts = ({show, initial, onAdd})=>{

  const [myState,setMyState] = useState(0); 

  // setMyState(parseInt(initial) + myState)

  function cambioContador(value) {
    if (value === 'suma') {
      setMyState(myState + 1); 
  
    }
    else if (value === 'resta' && myState >= 1) {
      setMyState(myState - 1);
     
    }

  }

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
        {/* <span onChange={"hola"}>{cantidad}</span>&nbsp;&nbsp; */}
        <span onChange={onAdd(myState+parseInt(initial))}>{myState+parseInt(initial)}</span>&nbsp;&nbsp;
        <Button onClick={() => cambioContador('resta')} variant="secondary">-</Button>&nbsp;&nbsp;
        {/* <Button onClick={()=>onClick(show)} variant="secondary" >Agregar al carrito</Button> */}
      </div>
    </React.Fragment>
  );
}

export default ItemCounts;