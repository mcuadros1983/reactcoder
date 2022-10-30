import ItemCounts from "./ItemCounts";
import '../App.css';
import { useState} from 'react'; 

const ItemDetail = ({details}) => {
    //inicializacion del contexto
    const [detalle, setDetalle] = useState(true)
    const [qty,setQty] = useState(0)
    
    
function handleChange(test){
    setQty(parseInt(test))
}  
    return (

        <div className="text-center">
            <p key={details.index}>La descripcion del producto es: {details.nombre}</p>
            <p key={details.index}>El precio del producto es: ${details.precio}</p>
            <img src={details.img} key={details.index}></img><br/><br/>
            <div>
               <ItemCounts item={details} show={detalle} onAdd={handleChange} initial="1"></ItemCounts><br/><br/>               
            </div>
        </div>
    )};

export default ItemDetail;
