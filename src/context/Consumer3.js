import React, {useContext} from 'react'
import Contexts from './Contexts'

function Consumer3() {
    const {contexto,getFromCache, cartList, addToCart, removeList, deleteItem} = useContext(Contexts.cartContext)

  return (
            <>
                <p>{getFromCache}</p>
            </>
  )
}

export default Consumer3