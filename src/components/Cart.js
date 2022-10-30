import React, {useContext, useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import Contexts from '../context/Contexts';
// import {Link,NavLink} from 'react-router-dom';
import '../styles/Cart.css'
import { getFirestore, collection, addDoc} from "firebase/firestore";
import { useNavigate, NavLink } from 'react-router-dom';
import Contact from './Contact';
import { Form } from 'react-bootstrap';

export  default function Cart() {
    let navigate =useNavigate()
    const [state, setState] = useState([])
    // const [cart, setCart] = useState({})
    // const [cart, setCart] = useState({
    //     buyer:{
    //         name:"",
    //         phone:"",
    //         email:""
    //     },
    //     items: [{
    //         name: "",
    //         price: 0,
    //         quantity:0
    //     }]
    //   })
    
    // const handleCheckout=(e) =>{
    //     console.log(context.value.length)
    //     console.log(state)
    //     {e.map((value)=>{
    //         return (
    //             console.log(value.nombre),
    //             setCart({
    //                 buyer: {
    //                   name: "Test",
    //                   phone: 12123,
    //                   email: "test@test"  
    //                 },
    //                 items:[{
    //                     name: value.nombre,
    //                     price: value.precio,
    //                     quantity: value.qty
    //                 }],
    //                 total: 1000
    //               })

    //         )
    //     })}
      
    //     // setCart({
    //     //     buyer: {
    //     //       name: "Test",
    //     //       phone: 12123,
    //     //       email: "test@test"  
    //     //     },
    //     //     items:[{
    //     //       name: e.nombre,
    //     //       price: e.precio,
    //     //       quantity:e.qty
    //     //     }],
    //     //     total: 1000
    //     //   })
    //   }
    
    //   console.log(cart)

    //---------------------------------------------
    // let order = state.map((value)=>{
    //              return ({
    //     buyer: {
    //       name: "An Ecommerce Client",
    //       email: "client@coderhouse.com",
    //       phone: "123456789"
    //     },

    //     items:[{
    //         name: value.nombre,
    //         price: value.precio,
    //         quantity:value.qty
    //     }],
    //     total:10000
    //              })})

    ////---------------------------------------------
    function addSingleDoc(order) {
        const db = getFirestore()
        const data = collection(db, "cart")
        return addDoc(data, order)
    }

    const context = useContext(Contexts.cartContext)
    let order = {
        buyer: {
            name: context.name,
            email: context.email,
            phone: context.phone
            },
        items:(state.map((value)=>{
            return ({
            name: value.nombre,
            price: value.precio,
            quantity:value.qty
            })})),
            
        total:context.total()
                    }
                
    
    // {
    //     buyer: {
    //       name: "An Ecommerce Client",
    //       email: "client@coderhouse.com",
    //       phone: "123456789"
    //     },

    //     items:[{
    //         name: state.nombre,
    //         price: state.precio,
    //         quantity:state.qty
    //     }],
    //     total:10000

    
    //   };
      
      const handleCheckout = ()=>{
        if(context.name=="" || context.email=="" || context.phone==""){
            alert("Todos los campos de contacto deben estar completos para completar la operacion")
            return;
        } else {

        addSingleDoc(order)
        context.removeList()
        navigate("/success")
        console.log(order)
      }
    }

      
    
      useEffect(()=>{
        setState(context.value)
        console.log(context.cart);
      },[context.value]) 
    
        console.log(state)
    //   const handleCheckout = ()=>{
    //     addSingleDoc(context.value)
    //   }
    
      return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>NOMBRE PRODUCTO</th>
                        <th>CANTIDAD</th>
                        <th>PRECIO</th>
                        <th>ELIMINAR</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    


                            
                {context.value.length ? 
                
                (state.map((value)=>{
                        return (
                            <tr key={value.index}>
                                {/* <td>{value.buyer.email}</td>
                                <td>{value.items[0].name}</td>
                                <td>{value.items[0].price}</td>
                                <td>{value.items[0].quantity}</td> */}
                                <td key={value.index}>{value.nombre}</td>
                                <td key={value.index}>{value.qty}</td>
                                <td key={value.index}>{value.precio}</td>
                                <Button  onClick={()=>context.deleteItem(value)}>Eliminar</Button><br/><br/>
                                
                            </tr>
                                
                          
                        )

                        
                    })):(
                        <div>
                            <h3>El carrito esta vacio</h3>
                            <NavLink style={{textDecoration:"none"}} to={'/'}><p>Volver a la tienda</p></NavLink>
                        </div>
                    )}
                                      
                </tbody>
            </table>
            <table>
                    {context.value.length>0 && (
                            <p>Monto Total ${context.total()}</p>
                        )}
                    {context.value.length>0 && (
                            <div><Contact></Contact></div>
                        )}
                    
                 
                    {context.value.length>0 && (
                    <Button variant="secondary" onClick={context.removeList}>Vaciar Carrito</Button>
                        )} &nbsp;&nbsp;
                    {context.value.length>0 && (
                    <Button onClick={handleCheckout}>CHECKOUT</Button>
                        )}
                       
           </table>

                

        </>)
}



                {/* <table>

                {context.value.length<=0 && (
                    
                )}



                {context.value.length>0 && (
                    <Button>Finalizar Compra</Button>,
                    <p>Monto Total ${context.total()}</p>
                )}
                
                {context.value.length>0 && (
                    <Button onClick={handleCheckout}>CHECKOUT</Button>
                )}
                
                
                </table> */}
            
            
            
           




//     const contexto = useContext(Contexts.cartContext)
//     console.log(contexto.value)
//     console.log(contexto.value.length)
//   return (
//             <div>
                
//                 {contexto.value.length ? 
//                 (contexto.value.map((valor)=>(
//                     <div key={valor.id} >
//                         <p >{valor.nombre}</p>
//                         <p >Cantidad: {valor.qty}</p>
//                         <p >Precio unitario: ${valor.precio}</p>
//                         <p>Monto del Item: $ {valor.precio * valor.qty}</p>
//                         <img  src={valor.img}></img>&nbsp;&nbsp;
//                         <Button  onClick={()=>contexto.deleteItem(valor)}>Eliminar Producto</Button>

//                     </div>
//                 ))):(
//                     <div>
//                         <h3>El carrito esta vacio</h3>,
//                         <NavLink style={{textDecoration:"none"}} to={'/'}><p>Volver a la tienda</p></NavLink>
//                     </div>

//                 )}  <br/><br/>
                
//                 {contexto.value.length>0 && (
//                     <Button onClick={contexto.removeList}>Vaciar Carrito</Button>
//                     // <Button>Finalizar Compra</Button>
//                 )}<br/><br/>

//                 {contexto.value.length>0 && (
//                     <Button>Finalizar Compra</Button>,
//                     <p>Monto Total ${contexto.total()}</p>
//                 )}


//             </div>
//   )
