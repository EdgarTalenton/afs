import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import DatosNosotros from './components/nosotros/DatosNosotros';
import Nosotros from './components/nosotros/Nosotros';
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
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>    
    </>
  );
}

export default App;
