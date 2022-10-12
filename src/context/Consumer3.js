import React, {useContext} from 'react'
import { Button } from 'react-bootstrap'
import Contexts from './Contexts'
import Item from '../components/Item'

export  default function Consumer3() {
    const {contexto,removeList} = useContext(Contexts.cartContext)
    console.log(contexto.value)
    console.log(contexto.value.length)
  return (
            <div>
                
                {contexto.value.length ? 
                (contexto.value.map((valor)=>(
                    <div>
                        <p key={valor.id}>{valor.nombre}</p>
                        <img key={valor.nombre} src={valor.foto}></img>

                    </div>
                ))):(
                    <h3>No hay registros</h3>
                )}  
                
                {contexto.value.length>0 && (
                    <Button onClick={removeList}>Cancelar</Button>
                )}
            </div>
  )
}