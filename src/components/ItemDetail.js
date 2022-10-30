import ItemCounts from "./ItemCounts";
import '../App.css';
import { useState, useContext, useEffect } from 'react'; 
import { Button } from "react-bootstrap";
import {useNavigate, NavLink} from 'react-router-dom';
import Contexts from "../context/Contexts";
import { filterCollection } from '../utils/Fiberbase'
import {useParams} from 'react-router-dom'
import Item from "./Item";
// import {doc, getDoc, getFirestore} from 'firebase/firestore';
import {collection, getDocs, getFirestore, query, where, getDoc, doc} from 'firebase/firestore';

const ItemDetail = ({details}) => {
    let navigate =useNavigate()
    //inicializacion del contexto
    const {context, addToCart, cart, setCart} = useContext(Contexts.cartContext)
    const [detalle, setDetalle] = useState(true)
    const [qty,setQty] = useState(0)
    
    
function handleChange(test){
    setQty(parseInt(test))
}

// function handleCheckout(e) {
//         console.log(cart.length)
//         console.log(details)

//         if (details=={}){
//             return
//         } else {
//         setCart([...cart,{
//             buyer: {
//               name: "Test",
//               phone: 12123,
//               email: "test@test"
//             },
//             items:[{
//               name: details.nombre,
//               price: details.precio
//             }],
//             total: details.precio
//           }])
//           console.log(cart);
//           navigate("/cart")
//           details = {}
//           console.log(details)
//       }
//     }
    
    return (

        <div className="text-center">
            <p key={details.index}>La descripcion del producto es: {details.nombre}</p>
            <p key={details.index}>El precio del producto es: ${details.precio}</p>
            <img src={details.img} key={details.index}></img><br/><br/>
            <div>
               <ItemCounts item={details} show={detalle} onAdd={handleChange} initial="1"></ItemCounts><br/><br/>
               {/* <ItemCounts item={details} show={detalle} onAdd={handleChange} onCheck={handleCheckout} initial="1"></ItemCounts><br/><br/> */}
               {/* <Button onClick={()=>addToCart(details,qty)}>CHECKOUT</Button> */}               
            </div>
        </div>
    )};

export default ItemDetail;
