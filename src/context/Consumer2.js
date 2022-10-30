import React, {useContext} from 'react'
import Contexts from './Contexts'

function Consumer2() {
    const contexto = useContext(Contexts.cartContext)
    console.log(contexto.value)
  return (
            <>
                {contexto.value.map((value)=>(
                    <>
                        <p key={value.id}>{value.nombre}</p>
                        <img key={value.nombre} src={value.img}></img>
                    </>
                ))}  
            </>
  )
}

export default Consumer2