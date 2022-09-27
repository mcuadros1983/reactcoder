import ItemList from "../components/ItemList";

function FetchData(aux){
    const data = new Promise ((resolve, reject)=>{
      if(aux){
        setTimeout(()=>{
          resolve({
            items:[ItemList]})
        },5000);
        } else {
          setTimeout(()=>{
            reject({
              error:"Error en resolver"
            })
          },5000);
        }
    })
    return data
  };
  
  export default FetchData;