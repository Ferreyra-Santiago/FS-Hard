import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

//viws
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import PcGame from "./views/PcGame/PcGame"
import Detail from './components/Detail/Detail';



function App() {
    return (
<Router>
<div >
      <NavBar/>
    <div className='flex flex-wrap '>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/pcgame' element={<PcGame/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
      </div>
    </div>
</Router>
    

  );
}

export default App;
