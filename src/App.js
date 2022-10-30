import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartContext from './context/CartContext';
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
          <Consumer3>
          </Consumer3>}/>
        <Route path='/success' element={<h1>Gracias por su compra!</h1>}></Route>
        <Route path='*' element={<h1>Página no encontrada</h1>}></Route>
      </Routes>
      </CartContext>
      <Footer></Footer>
    </BrowserRouter>
)};

export default App;
