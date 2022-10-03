
const ItemDetail = ({details}) => {
    return (

        <div>
            <p key={details.index}>La descripcion del producto es: {details.nombre}</p>
            <p key={details.index}>El precio del producto es: ${details.precio}</p>
            <img src={details.foto} key={details.index}></img>
        </div>
    )};

export default ItemDetail;


// const ItemDetail = ({details})=>{
//     return (
//             <div>
//                     <p>{details.nombre}</p>
//             </div>
//     );
// };

// export default ItemDetail;
