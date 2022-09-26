import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

//viws
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './views/Cart/Cart';
import CartProvider from './CartContex';
import Product from './views/product/Product';
import Footer from './components/Footer/Footer';








function App() {
    return (
<Router>
  <CartProvider>
<div className='.app'>
      <NavBar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
      </Routes>

      </div>
<Footer/>
    </CartProvider>
</Router>
    

  );
}

export default App;
