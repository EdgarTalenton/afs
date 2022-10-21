import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import Nosotros from './components/nosotros/Nosotros';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path="*" element={<p>Error 404</p>} />
      </Routes>
      <Footer />
    </BrowserRouter>    
    </>
  );
}

export default App;
