const ItemDetail = ({details}) => {
    return (
        <div>
            {details.prod.map((detail,key) => {
                return (
                        <div>
                            <p key={detail.id}>El precio del producto es: {detail.precio}</p>
                        </div>
                        )
                })}
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
