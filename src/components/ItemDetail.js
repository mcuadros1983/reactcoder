import ItemCounts from "./ItemCounts";
import '../App.css';
import { useState, useContext, useEffect } from 'react'; 
import { Button } from "react-bootstrap";
import {useNavigate, NavLink} from 'react-router-dom';
import Contexts from "../context/Contexts";

const ItemDetail = ({details}) => {
    let navigate =useNavigate()
    //inicializacion del contexto
    const {context, addToCart} = useContext(Contexts.cartContext)
    const [detalle, setDetalle] = useState(true)
    const [qty,setQty] = useState(0)

    
function handleChange(test){
    setQty(parseInt(test))
}
    return (

        <div className="text-center">
            <p key={details.index}>La descripcion del producto es: {details.nombre}</p>
            <p key={details.index}>El precio del producto es: ${details.precio}</p>
            <img src={details.foto} key={details.index}></img><br/><br/>
            <div>
               <ItemCounts item={details} show={detalle} onAdd={handleChange} initial="1"></ItemCounts><br/><br/>
               {/* <Button onClick={()=>addToCart(details,qty)}>CHECKOUT</Button> */}
                
            </div>
        </div>
    )};

export default ItemDetail;
