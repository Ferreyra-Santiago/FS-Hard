import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

//viws
import Home from './components/views/Home/Home';
import Contact from './components/views/Contact/Contact';
import PcGame from './components/views/PcGame/PcGame';
import Detail from './components/views/Detail/Detail';



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
