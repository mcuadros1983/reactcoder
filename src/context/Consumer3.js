import React, {useContext} from 'react'
import Contexts from './Contexts'

function Consumer3() {
    const {contexto, test} = useContext(Contexts.cartContext)
    console.log(test)
  return (
            <>
                {test.map((value)=>(
                    <>
                        <p key={value.index}>{value}</p>
                    </>
                ))}  
            </>
  )
}

export default Consumer3