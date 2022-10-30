import React,{useState} from 'react'
//se importa la inicializacion del contexto
import Contexts from './Contexts'
import {useNavigate} from 'react-router-dom';


//se declara una variable tipo wrapper
export default function CartContext ({children}){
    const [state, setState] = useState([])
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")


    let navigate =useNavigate()

    const existe = (item)=>
      state.some((buscada)=>buscada.nombre === item.nombre);

    //funcionalidad para agregar un producto al carrito
    const addToCart = (details,qty) => {
        if(existe(details)){
            return alert("Ya existe el elemento " + details.nombre + ' en el carrito')
          }else{
            // modifica el contexto con lo que ya tenias antes, mas mi estado
            let nuevoItem = {...details,qty}
            setState([...state, nuevoItem])
            navigate("/cart")

          }
          return
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
    return setState(deleteItem)
  };

  const total =()=>{
    const total = state.reduce(
      (acum,state ) => (state.qty > 0 ? acum + (state.qty * state.precio) : acum),0
    );
    return total;
  }
    return (
        //este componente servira como provider al contexto y modificara el valor inicial del contexto, agarrando el valor del provider mas cercano desde donde se esta mandando a llamar
        <Contexts.cartContext.Provider value = {{value:state,func:setState, addToCart, removeList, deleteItem, pendientes,total, name,setName,phone,setPhone,email,setEmail}}>
            {children}
        </Contexts.cartContext.Provider>
    )
}


