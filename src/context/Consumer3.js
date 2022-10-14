import React, {useContext} from 'react'
import { Button } from 'react-bootstrap'
import Contexts from './Contexts'

export  default function Consumer3() {
    const contexto = useContext(Contexts.cartContext)
    console.log(contexto.value)
    console.log(contexto.value.length)
  return (
            <div>
                
                {contexto.value.length ? 
                (contexto.value.map((valor)=>(
                    <div key={valor.id} >
                        <p >{valor.nombre}</p>
                        <img  src={valor.foto}></img>&nbsp;&nbsp;
                        <Button  onClick={()=>contexto.deleteItem(valor)}>Eliminar Item</Button>

                    </div>
                ))):(
                    <h3>No hay registros</h3>
                )}  <br/><br/>
                
                {contexto.value.length>0 && (
                    <Button onClick={contexto.removeList}>Cancelar</Button>

                )}
            </div>
  )
}