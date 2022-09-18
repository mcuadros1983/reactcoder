import './App.css';
import CartWidget from './components/CartWidget';
import List from './components/ItemListContainer';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <List/>
      </main> 
    </div>
  );
}

export default App;
