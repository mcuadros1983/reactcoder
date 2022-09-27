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

const ItemList = ({items}) => {
    return (
        <div>
            <ul>{items.items.map((item,index) => {
                return (
                    <li key={index}>{item}</li>)
                })}
            </ul>
        </div>
    )};

export default ItemList