// function FetchData(aux){

    // const prod =  [
    //   { id:1, nombre: "costilla"},
    //   { id:2, nombre: "vacio"},
    //   { id:3, nombre: "cuadril"},
    //   { id:4, nombre: "chorizo"}
    //   ];

      const prod =  [{id:1,nombre:"costilla",precio:1850},{id:2,nombre:"vacio",precio:1900},{id:3,nombre:"cuadril",precio:1650},{id:4,nombre:"chorizo",precio:1750}];
    // const prod =  ["costilla","vacio","cuadril","chorizo"];

    function FetchData(aux){
    const data = new Promise ((resolve, reject)=>{
      if(aux){
        setTimeout(()=>{
          resolve({prod})
        },2000);
        } else {
          setTimeout(()=>{
            reject({
              error:"Error en resolver"
            })
          },2000);
        }
    })
    return data
  };
  
  export default FetchData;