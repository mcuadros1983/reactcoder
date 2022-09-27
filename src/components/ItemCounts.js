import React from 'react'
import { useState } from 'react';

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
      
      <button onClick={() => cambioContador('suma')}>
        +
      </button>&nbsp;&nbsp;
      <span>{myState}</span>&nbsp;&nbsp;
      <button onClick={() => cambioContador('resta')}>
        -
      </button>&nbsp;&nbsp;
      <button onClick={() => stock(30)}>Agregar al carrito</button>
    </React.Fragment>
  );
}

export default ItemCounts;