import React, {useContext} from 'react'
import { Button } from 'react-bootstrap'
import Contexts from '../context/Contexts';
import {Link,NavLink} from 'react-router-dom';

export  default function Cart() {
    const contexto = useContext(Contexts.cartContext)
    console.log(contexto.value)
    console.log(contexto.value.length)
  return (
            <div>
                
                {contexto.value.length ? 
                (contexto.value.map((valor)=>(
                    <div key={valor.id} >
                        <p >{valor.nombre}</p>
                        <p >Cantidad: {valor.qty}</p>
                        <p >Precio unitario: ${valor.precio}</p>
                        <p>Monto del Item: $ {valor.precio * valor.qty}</p>
                        <img  src={valor.foto}></img>&nbsp;&nbsp;
                        <Button  onClick={()=>contexto.deleteItem(valor)}>Eliminar Producto</Button>

                    </div>
                ))):(
                    <div>
                        <h3>El carrito esta vacio</h3>,
                        <NavLink style={{textDecoration:"none"}} to={'/'}><p>Volver a la tienda</p></NavLink>
                    </div>

                )}  <br/><br/>
                
                {contexto.value.length>0 && (
                    <Button onClick={contexto.removeList}>Vaciar Carrito</Button>
                    // <Button>Finalizar Compra</Button>
                )}<br/><br/>

                {contexto.value.length>0 && (
                    <Button>Finalizar Compra</Button>,
                    <p>Monto Total ${contexto.total()}</p>
                )}


            </div>
  )
}