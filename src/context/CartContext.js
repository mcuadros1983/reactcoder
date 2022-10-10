import React,{useState, useContext} from 'react'
//se importa la inicializacion del contexto
import Contexts from './Contexts'
import {useNavigate} from 'react-router-dom';

//se declara una variable tipo wrapper
export default function CartContext ({children}){
    const [state, setState] = useState([])
    console.log(state)
    const context = useContext(Contexts.cartContext)
    let navigate =useNavigate()

    function handleCheckOut(e){
        if(state.includes(e)){
            alert("Ya existe el elemento " + e + ' en el carrito')
        }else{
            // modifica el contexto con lo que ya tenias antes, mas mi estado
            setState([...state, e])
            console.log(state)
            navigate("/carrito")
        }
    }
    return (
        //este componente servira como provider al contexto y modificara el valor inicial del contexto, agarrando el valor del provider mas cercano desde donde se esta mandando a llamar
        <Contexts.cartContext.Provider value = {{value:state,func:setState,handleCheckOut}}>
            {/* todo lo que este dentro de este provider va a poder acceder al state/value y a la funcio par amodificar ese estado */}
            {children}
        </Contexts.cartContext.Provider>
    )
}