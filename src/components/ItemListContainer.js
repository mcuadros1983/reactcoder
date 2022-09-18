import React from 'react'
import { Container } from 'react-bootstrap'

// const ItemListContainer = (greeting) => {
//   return (
//     <p>ItemListContainer {greeting.valor},
//     ItemListContainer {greeting.nombre} </p>
//   )
// }

const List = ()=>{
    return(
        <Container class="row d-flex justify-content-center">
        <table>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Comprar</th>
            </tr>
            <tr>
                <td>
                    <ItemListContainer.NombreProducto nombre="producto1"/>
                </td>
                <td>
                    <ItemListContainer.PrecioProducto precio="950"/>
                </td>
                <td>
                    <ItemListContainer.Boton/>
                </td>
            </tr>
        </table>
        </Container>
    )
}

const ItemListContainer ={
    Boton: ()=>{
        return(
            <button>COMPRAR</button>
        )
    },
    NombreProducto : (greeting)=>{
        return(
            <p>{greeting.nombre}</p>
        )
    },
    PrecioProducto : (greeting)=>{
        return(
            <p>{greeting.precio}</p>
        )
    }

}

export default List