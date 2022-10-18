import React,{useState, useEffect} from 'react'
//se importa la inicializacion del contexto
import Contexts from './Contexts'
import {useNavigate, NavLink} from 'react-router-dom';


//se declara una variable tipo wrapper
export default function CartContext ({children}){
    const [state, setState] = useState([])
    const [quantity,setQuantity] =useState(0)

    console.log(state)
    let navigate =useNavigate()

    //funcionalidad para agregar un producto al carrito
    const addToCart = (details,qty) => {
        if(state.includes(details)){
            alert("Ya existe el elemento " + details.nombre + ' en el carrito')
          }else{
            // modifica el contexto con lo que ya tenias antes, mas mi estado
            let nuevoItem = {...details,qty}
            // let sumaQty = reduce((quantity, qty) => quantity + qty)
            // setQuantity = sumaQty
            setState([...state, nuevoItem])
            console.log(nuevoItem)
            console.log(quantity)
            // navigate("/carrito")

          }
          return (
            <p>Se han agregado {qty} al carrito</p>
          )
    }

  const pendientes =()=>{
    const pendientes = state.reduce(
      (acum,state ) => (state.qty > 0 ? acum + state.qty : acum),0
    );
    return pendientes;
  }

    //funcionalidad para dejar el carrito vacío
  const removeList = ()=>{
    setState([])
  }

  const deleteItem = (data)=> {
    const deleteItem = state.filter((item) => item.id !== data.id);
    return setState(deleteItem);
  };

  const total =()=>{
    const total = state.reduce(
      (acum,state ) => (state.qty > 0 ? acum + (state.qty * state.precio) : acum),0
    );
    return total;
  }

    return (
        //este componente servira como provider al contexto y modificara el valor inicial del contexto, agarrando el valor del provider mas cercano desde donde se esta mandando a llamar
        <Contexts.cartContext.Provider value = {{value:state,func:setState, addToCart, removeList, deleteItem, pendientes,total}}>
            {/* todo lo que este dentro de este provider va a poder acceder al state/value y a la funcio par amodificar ese estado */}
            {children}
        </Contexts.cartContext.Provider>
    )
}


