import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemListContainer/ItemCount';
import ItemList from './components/ItemListContainer/ItemList';





function App() {
    return (
    <div >
      <NavBar/>
    <ItemListContainer greeting="Nuestros Productos" />
    <ItemCount />
    <div className='flex flex-wrap '>
      <ItemList/>
      </div>
    </div>
    

  );
}

export default App;
