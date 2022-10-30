import React, {useContext} from 'react'
// import {FontAwesomeIcon} from font
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import Contexts from '../context/Contexts';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const contexto = useContext(Contexts.cartContext)
  return (
    <>
        {contexto.pendientes() >0 && (
        <Link to={'/cart'} style={{ textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faCartShopping}/>&nbsp;&nbsp;
            <span>{contexto.pendientes()} Items</span>
        </Link>
        // <a href='/carrito' style={{ textDecoration: 'none' }}>
        //     <FontAwesomeIcon icon={faCartShopping}/>&nbsp;&nbsp;
        //     <span>{contexto.pendientes()} Items</span>
        // </a> 
        )} 
    </>  
  )
}

export default CartWidget;