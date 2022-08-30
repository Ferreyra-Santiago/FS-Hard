import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemList from './components/ItemList/ItemList';





function App() {
    return (
    <div >
      <NavBar/>
    <ItemListContainer greeting="Nuestros Productos" />
    <div className='flex flex-wrap '>
      <ItemList/>
      </div>
    </div>
    

  );
}

export default App;
