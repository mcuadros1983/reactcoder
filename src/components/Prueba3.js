import { useParams, NavLink } from 'react-router-dom'
import {useEffect, useState} from "react"
import FetchData from '../utils/FetchData'

const Prueba3 = ({items}) => {

//setear los hooks
const [state, setState] = useState({prod:[]})
const {id} = useParams();

// useEffect(()=> {
//     FetchData(true).then((value)=>{
//       setState(value.prod.filter(element => element.id === id.id));
//       console.log(value.prod)
//     })
//   }, [id])

  
//----------------------
//funcion para traer los datos de la Api
useEffect(()=> {
    FetchData(true).then((value)=>{
        setState(value)
        console.log(value)
    })
  }, [])

  console.log(state.prod)

//metodo de filtrado
useEffect(()=>{
    console.log(state);
    const res = state.prod.filter((value)=>{
        return value.id === id.id
    })
    console.log(res);
    setState(res)
},[id])

//-------------------

// useEffect(()=>{
//     console.log(state);
//     let res = state.filter((value)=>{
//     value.id.includes(id.id)
//     })
//     console.log(res);
//     setState(res)
// },[id])



//funcion de busqueda

//renderizar las vistas



    
    // const [state, setState] = useState([])

    // useEffect(()=> {
    //     FetchData(true).then((value)=>{
    //       setState(value.prod.find(element => element.id == 1));
    //       console.log(value)
    //     }).catch((value)=>{
    //       setState(value.prod.find(element => element.id == 1));
    //     })
    //   }, [])

    //    useEffect(()=>{
    //     console.log(test);
    //     // const res = test.prod.filter((value)=>{
    //     //     return value.id == id.id
    //     // })
    //     // console.log(res);
    //     // setState(res)
    // },[id])

      
    return(
        <>
       
            <h1>Prueba3</h1> 
            <div>
                {state.prod.map((item)=>{
                    return (
                        <div key={item.id}>
                            <p key={item.id}><NavLink to={`/items/${item.id}`}>{item.name}</NavLink></p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Prueba3;