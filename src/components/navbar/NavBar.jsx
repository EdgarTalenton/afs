import { Link } from 'react-router-dom';
import logo from '../../utils/img/logo.png';
import './NavBar.css';
const NavBar = () => {
    return(
        <>
            <header>
                <div className="container">
                    <div className="flexbox">
                        <div className="logo">
                            <Link to='/afs'><img src={logo} alt="AFS Arquitectos" width="220" /></Link>
                        </div>
                        <nav>
                            <ul>
                                <li><Link to='/nosotros'>Nosotros</Link></li>
                                <li>Proyectos</li>
                                <li>Novedades</li>
                                <li>Contacto</li>
                            </ul>
                            <i className="fab fa-linkedin"></i>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}
export default NavBar