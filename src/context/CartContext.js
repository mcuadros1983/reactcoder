import React,{useState, useEffect} from 'react'
//se importa la inicializacion del contexto
import Contexts from './Contexts'
import {useNavigate, NavLink} from 'react-router-dom';


//se declara una variable tipo wrapper
export default function CartContext ({children}){
    const [state, setState] = useState([])
    console.log(state)
    let navigate =useNavigate()

    //funcionalidad para agregar un producto al carrito
    function addToCart(details){
        if(state.includes(details)){
            alert("Ya existe el elemento " + details.nombre + ' en el carrito')
          }else{
            // modifica el contexto con lo que ya tenias antes, mas mi estado
            setState([...state, details])
            console.log(state)
            navigate("/carrito")
          }

    }

    //funcionalidad para dejar el carrito vacío
  function removeList (){
    setState([])
  }

    // function Prueba(id){
    //     console.log(id)
    //     return state.find(obj=>obj.id === id)
    // }

    return (
        //este componente servira como provider al contexto y modificara el valor inicial del contexto, agarrando el valor del provider mas cercano desde donde se esta mandando a llamar
        <Contexts.cartContext.Provider value = {{value:state,func:setState, addToCart,removeList}}>
            {/* todo lo que este dentro de este provider va a poder acceder al state/value y a la funcio par amodificar ese estado */}
            {children}
        </Contexts.cartContext.Provider>
    )
}


