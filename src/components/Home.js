// import './App.css';
import ItemListContainer from './ItemListContainer';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react'
import ItemDetailContainer from './ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function Home() {
  return (
    // <BrowserRouter>
    //   <NavBar></NavBar>
    //   <Routes>
    //     <Route exact path='/' element={<Home/>}/>
    //     <Route exact path='/pokemons' element={<Pokemons />}/>
    //     <Route exact path='/pokemon/:pokemonId' element={<Pokemon />}/>
    //   </Routes>
    
    // </BrowserRouter>




    <div className="App">
      <header>
        {/* <NavBar></NavBar> */}
      </header>
      <main>
        {/* <ItemListContainer greeting={'Contenido de greeting pasado a traves de ItemListContainer!!'}/> */}
        <ItemListContainer/><br/><br/><br/><br/>
  

      </main> 
    </div>
  );
}
export default Home;
