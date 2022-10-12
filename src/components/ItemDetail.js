import ItemCounts from "./ItemCounts";
import '../App.css';
import { useState, useContext } from 'react'; 
import { Button } from "react-bootstrap";
import {useNavigate, NavLink} from 'react-router-dom';
import Contexts from "../context/Contexts";

const ItemDetail = ({details}) => {
    let navigate =useNavigate()
    //inicializacion del contexto
    // const {Prueba} = useContext(Contexts.cartContext)
    const {context, addToCart} = useContext(Contexts.cartContext)
    const [detalle, setDetalle] = useState(true)

function onAdd(show){
    const change = !show
    setDetalle(change);
}

// function handleCheckOut(e){
//     if(context.value.includes(details)){
//         alert("Ya existe el elemento " + details.nombre + ' en el carrito')
//       }else{
//         // modifica el contexto con lo que ya tenias antes, mas mi estado
//         context.func([...context.value, details])
//         console.log(context.value)
//         navigate("/carrito")
//       }
// }
    return (

        <div className="text-center">
            <p key={details.index}>La descripcion del producto es: {details.nombre}</p>
            <p key={details.index}>El precio del producto es: ${details.precio}</p>
            <img src={details.foto} key={details.index}></img><br/><br/>
            <div>
               <ItemCounts show={detalle} onClick={onAdd}></ItemCounts><br/><br/>
               {/* <Button onClick={handleCheckOut}>CHECKOUT</Button> */}
               <Button onClick={()=>addToCart(details)}>CHECKOUT</Button>
                
            </div>
        </div>
    )};

export default ItemDetail;
