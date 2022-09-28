// import { useState } from "react";
// import Item from "./Item";


// function ItemList () {
//     const [items, setItems] = useState([Item])
//     return <ul>
//         {items.map(u=> <li key={u.id}>{u.nombre}</li>)}
        
//     </ul>
// }
// console.log(Item)
// export default ItemList

//---------------------------------------------------
import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <div>
            {items.prod.map((item,index) => {
                return (
                    <Item itemsp={item} key={index}></Item>)
                })}
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