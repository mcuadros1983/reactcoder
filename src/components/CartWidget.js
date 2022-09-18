import React from 'react'
// import {FontAwesomeIcon} from font
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"

const CartWidget = () => {
  return (
    <>
        <a href="#shopcart">
            <FontAwesomeIcon icon={faCartShopping}/>
        </a>  
    </>  
  )
}

export default CartWidget;