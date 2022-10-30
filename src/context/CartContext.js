import React,{useState, useEffect} from 'react'
//se importa la inicializacion del contexto
import Contexts from './Contexts'
import {useNavigate, NavLink} from 'react-router-dom';


//se declara una variable tipo wrapper
export default function CartContext ({children}){
    const [state, setState] = useState([])
    const [quantity,setQuantity] =useState(0)
    const [cart, setCart] = useState({})
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")

    console.log(state)
    let navigate =useNavigate()

    const existe = (item)=>
      state.some((buscada)=>buscada.nombre === item.nombre);

      // const handleCheckout=(e) =>{
      //   {e.map((value)=>{
      //       return (
      //           console.log(value.nombre),
      //           setCart({
      //               buyer: {
      //                 name: "Test",
      //                 phone: 12123,
      //                 email: "test@test"  
      //               },
      //               items:[{
      //                   name: value.nombre,
      //                   price: value.precio,
      //                   quantity: value.qty
      //               }],
      //               total: 1000
      //             })

      //       )
             
      //   })}   
      //      console.log(cart) 
      // }
      
  
    //funcionalidad para agregar un producto al carrito
    const addToCart = (details,qty) => {
        if(existe(details)){
            return alert("Ya existe el elemento " + details.nombre + ' en el carrito')
          }else{
            // modifica el contexto con lo que ya tenias antes, mas mi estado
            let nuevoItem = {...details,qty}
            // handleCheckout(nuevoItem)
            // let sumaQty = reduce((quantity, qty) => quantity + qty)
            // setQuantity = sumaQty
                  
            console.log(nuevoItem)
            setState([...state, nuevoItem])
            // console.log(quantity)
            console.log(state)
          
            navigate("/cart")
            // handleCheckout(state)
          }
          return
    }

  const pendientes =()=>{
    const pendientes = state.reduce(
      (acum,state ) => (state.qty > 0 ? acum + state.qty : acum),0
    );
    return pendientes;
  }

    //funcionalidad para dejar el carrito vacío
  const removeList = ()=>{
    setState([])
  }

  const deleteItem = (data)=> {
    const deleteItem = state.filter((item) => item.id !== data.id);
    return setState(deleteItem)
  };

  const total =()=>{
    const total = state.reduce(
      (acum,state ) => (state.qty > 0 ? acum + (state.qty * state.precio) : acum),0
    );
    return total;
  }


    return (
        //este componente servira como provider al contexto y modificara el valor inicial del contexto, agarrando el valor del provider mas cercano desde donde se esta mandando a llamar
        <Contexts.cartContext.Provider value = {{value:state,func:setState, addToCart, removeList, deleteItem, pendientes,total, name,setName,phone,setPhone,email,setEmail}}>
            {/* todo lo que este dentro de este provider va a poder acceder al state/value y a la funcio par amodificar ese estado */}
            {children}
        </Contexts.cartContext.Provider>
    )
}


