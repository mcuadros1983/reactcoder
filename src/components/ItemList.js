import Item from "./Item";
import { useParams, NavLink } from 'react-router-dom'
import {useEffect, useState} from "react"

const ItemList = ({items}) => {
    
    const {id} = useParams();
    const [state, setState] = useState([])
    
    return (
        
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">   
            {items.prod.map((item) => {
                return (
                    <div className="col-md-4" key={item.id}>
                        <Item itemsp={item}></Item>
                        
                    </div>
                    )
                })}
            </div>
        </div>
    )};

export default ItemList

//--------------------------------------------------

// import Item from "./Item";

// const ItemList = ({items}) => {
//     return (
//         <div>
//             <ul>{items.prod.map(u => <Item key={u.id} items={u.nombre}></Item>)
//                 }
//             </ul>
//         </div>
//     )};

// export default ItemList