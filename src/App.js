import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react'
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Prueba1 from './components/Prueba1';
import Prueba2 from './components/Prueba2';
import Prueba3 from './components/Prueba3';
import Item from './components/Item';
import ItemList from './components/ItemList';

function App() {
  const [state, setState] = useState({prod:[]})
  
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/prueba1' element={<Prueba1/>}/>
        <Route exact path='/prueba2' element={<Prueba2/>}/>
        <Route exact path='/items/:id' element={
          <Prueba3 items={state}>Prueba3</Prueba3>
          }/>

      </Routes>
    </BrowserRouter>
)};

export default App;
