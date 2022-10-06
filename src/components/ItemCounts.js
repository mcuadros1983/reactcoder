import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const ItemCounts = ()=>{
  const [myState,setMyState] = useState(0); 
  

  function cambioContador(value) {
    if (value === 'suma') {
      setMyState((estadoPrevio) => estadoPrevio + 1);
    }
    else if (value === 'resta' && myState >= 1) {
      setMyState((estadoPrevio) => estadoPrevio - 1);
    }
  }
  
  function stock(value){
    // let stock = 20;

    function onAdd() {
      let resultado= alert("se han agregado correctamente " + myState + " elementos al carrito");
      }

    if (myState<=value){
      onAdd()
    } else {
      alert("no existe stock suficiente para agregar al carrito")
    }
  };

  return(
    <React.Fragment>
      <Button onClick={() => cambioContador('suma')} variant="secondary">+</Button>&nbsp;&nbsp;
      <span>{myState}</span>&nbsp;&nbsp;
      <Button onClick={() => cambioContador('resta')} variant="secondary">-</Button>&nbsp;&nbsp;
      <Button onClick={() => stock(30)} variant="secondary">Agregar al carrito</Button>
      
    </React.Fragment>
  );
}

export default ItemCounts;