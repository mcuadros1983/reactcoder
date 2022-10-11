import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartContext from './context/CartContext';
import Consumer2 from './context/Consumer2';
import Consumer3 from './context/Consumer3';
import Cart from './components/Cart';

function App() {
  
  return (
    <BrowserRouter>
      <CartContext>
      <NavBar></NavBar>
      
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route exact path='/items/:id' element={<ItemDetailContainer/>}/>    
        <Route exact path='/carrito' element={
          <Consumer2>
          </Consumer2>}/>
        {/* <Route exact path='/carrito3' element={
          <Consumer3>
          </Consumer3>}/> */}
      </Routes>
      </CartContext>

    </BrowserRouter>
)};

export default App;
