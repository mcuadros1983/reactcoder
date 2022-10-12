import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';

const ItemCounts = ({show, onClick})=>{
  const [myState,setMyState] = useState(0); 
  
  function getClassName(mostrar) {
    if (mostrar) {
      return 'mostrar';
    }else{
     return 'borrar';
    }
  }

  function cambioContador(value) {
    if (value === 'suma') {
      setMyState((estadoPrevio) => estadoPrevio + 1);
    }
    else if (value === 'resta' && myState >= 1) {
      setMyState((estadoPrevio) => estadoPrevio - 1);
    }
  }
  
  function stock(valor){
    // let stock = 20;

    function onAdd() {
      alert("se han agregado correctamente " + myState + " elementos al carrito");
      }

    if (myState<=valor){
      onAdd()
    } else {
      alert("no existe stock suficiente para agregar al carrito")
    }
  };

  return(
    <React.Fragment>
      <div className={getClassName(show)} >
        <Button onClick={() => cambioContador('suma')} variant="secondary">+</Button>&nbsp;&nbsp;
        <span>{myState}</span>&nbsp;&nbsp;
        <Button onClick={() => cambioContador('resta')} variant="secondary">-</Button>&nbsp;&nbsp;
        <Button onClick={()=>onClick(show)} variant="secondary" >Agregar al carrito</Button>
      </div>
    </React.Fragment>
  );
}

export default ItemCounts;