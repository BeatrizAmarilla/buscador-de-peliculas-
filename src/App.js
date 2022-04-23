import './App.scss';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Main from './components/Main';
import Ultimas from './components/Ultimas';
import Populares from './components/Populares';
import Buscar from './components/Buscar';
import NavPeliculas from './components/NavPeliculas';
import PeliDetalles from './components/PeliDetalles';
import Footer from "./components/Footer";
import TopRated from "./components/TopRated";


const App = ()=>{
  return (
    <div className='App'>
      <BrowserRouter>
        <NavPeliculas/>
        <Routes>
          <Route path='/' element={<Main/>}/>
           
            <Route path='/ultimas' element={<Ultimas/>}/>
            <Route path='/populares' element={<Populares/>}/>
            <Route path='/buscar' element={<Buscar/>}/>
            <Route path='/movie/:id' element={<PeliDetalles/>}/>
            <Route path="/TopRated" element={<TopRated />} />
            
        </Routes>
      </BrowserRouter>
      <Footer/>
   </div>
  );
}

export default App;
