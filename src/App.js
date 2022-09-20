import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <ItemListContainer greeting={'Contenido de greeting pasado a traves de ItemListContainer!!'}/>
      </main> 
    </div>
  );
}

export default App;
