  import costilla from '../components/img/costilla.jpg'
  import vacio from '../components/img/vacio.webp'
  import costeleta from '../components/img/costeleta.webp'
  import chorizocriollo from '../components/img/chorizocriollo.jpg'
  import {doc, getDoc, getFirestore} from 'firebase/firestore';
  

  const prod =  [{id:1,nombre:"Costilla",precio:1850, img:costilla, descripcion:"Costilla de novillo", category:"novillo", categoryId:1},{id:2,nombre:"Vacio",precio:1900,img:costilla, descripcion:"Vacio de novillo", category:"novillo",categoryId:1},{id:3,nombre:"Costeleta",precio:1650,img:costeleta,descripcion:"Costeleta de novillo",category:"novillo",categoryId:1},{id:4,nombre:"Chorizo",precio:1750,img:chorizocriollo,descripcion:"Chorizo Criollo elaboración propia",category:"elaborados",categoryId:2}];


    function FetchData(aux){

    const data = new Promise ((resolve, reject)=>{
      if(aux){
        setTimeout(()=>{
          resolve({prod})
        },1000);
        } else {
          setTimeout(()=>{
            reject({
              error:"Error en resolver"
            })
          },1000);
        }
    })
    return data

  };
  
  export default FetchData;