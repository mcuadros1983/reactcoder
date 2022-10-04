import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Prueba1 from './components/Prueba1';
import Prueba2 from './components/Prueba2';
import Category from './components/Category';


function App() {
  const [state, setState] = useState({prod:[]})
  
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route exact path='/prueba1' element={<Prueba1/>}/>
        <Route exact path='/prueba2' element={<Prueba2/>}/>
        <Route path='/category/:categoryId' element={<Category/>}/>
        <Route exact path='/items/:id' element={<ItemDetailContainer/> }/>

         

      </Routes>
    </BrowserRouter>
)};

export default App;
