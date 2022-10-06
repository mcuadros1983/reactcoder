import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route exact path='/items/:id' element={<ItemDetailContainer/> }/>

         

      </Routes>
    </BrowserRouter>
)};

export default App;
