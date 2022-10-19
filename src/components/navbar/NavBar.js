import { Link } from 'react-router-dom';
import logo from '../../utils/img/logo.png';
import './NavBar.css';
const NavBar = () => {
    return(
        <>
        <div className="container-fluid">
            <header>
                <div className="logo">
                    <Link to='/'><img src={logo} alt="AFS Arquitectos" /></Link>
                </div>
                <nav>
                    <ul>
                        <li>Nosotros</li>
                        <li>Proyectos</li>
                        <li>Novedades</li>
                        <li>Contacto</li>
                    </ul>
                </nav>
            </header>
        </div>
        </>
    )
}
export default NavBar