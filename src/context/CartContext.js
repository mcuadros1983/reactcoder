import React,{useState} from 'react'
//se importa la inicializacion del contexto
import Contexts from './Contexts'

//se declara una variable tipo wrapper
export default function CartContext ({children}){
    const [state, setState] = useState([])
    console.log(state)

    return (
        //este componente servira como provider al contexto y modificara el valor inicial del contexto, agarrando el valor del provider mas cercano desde donde se esta mandando a llamar
        <Contexts.cartContext.Provider value = {{value:state,func:setState}}>
            {/* todo lo que este dentro de este provider va a poder acceder al state/value y a la funcio par amodificar ese estado */}
            {children}
        </Contexts.cartContext.Provider>
    )
}


