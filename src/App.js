import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Contacto from './components/contacto/Contacto';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import DatosNosotros from './components/nosotros/DatosNosotros';
import Nosotros from './components/nosotros/Nosotros';
import Novedades from './components/novedades/Novedades';
import Proyecto from './components/proyectos/Proyecto';
import Proyectos from './components/proyectos/Proyectos';
import Error404 from './error-404';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/afs' element={<Home />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/nosotros/:nosotros' element={<DatosNosotros />} />
        <Route path='/proyectos' element={<Proyectos />} />
        <Route path='/proyectos/:id' element={<Proyecto />} />
        <Route path='/novedades' element={<Novedades />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>    
    </>
  );
}

export default App;
