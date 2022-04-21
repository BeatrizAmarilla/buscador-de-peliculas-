import './App.scss';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Ultimas from './components/Ultimas';
import Populares from './components/Populares';
import Buscar from './components/Buscar';
import NavPeliculas from './components/NavPeliculas';
import PeliDetalles from './components/PeliDetalles';
import Footer from "./components/Footer";

const App = ()=>{
  return (
    <div className='App'>
      <BrowserRouter>
        <NavPeliculas/>
        <Routes>
          <Route path='/' element={<Home/>}/>
           
            <Route path='/ultimas' element={<Ultimas/>}/>
            <Route path='/populares' element={<Populares/>}/>
            <Route path='/buscar' element={<Buscar/>}/>
            <Route path='/movie/:id' element={<PeliDetalles/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
   </div>
  );
}

export default App;
