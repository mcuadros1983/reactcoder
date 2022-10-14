import React, {useContext} from 'react'
// import {FontAwesomeIcon} from font
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import Contexts from '../context/Contexts';

const CartWidget = () => {
  const contexto = useContext(Contexts.cartContext)
  return (
    <>
        {contexto.value.length>0 && (
        <a href="#shopcart" style={{ textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faCartShopping}/>&nbsp;&nbsp;
            <span>{contexto.value.length} Items</span>
        </a> )} 
    </>  
  )
}

export default CartWidget;