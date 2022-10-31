import { NavLink, Link } from 'react-router-dom';
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
                                <li><NavLink to='/nosotros' className={({isActive}) => (isActive ? "active" : '')}>Nosotros</NavLink></li>
                                <li><NavLink to='/proyectos' className={({isActive}) => (isActive ? "active" : '')}>Proyectos</NavLink></li>
                                <li><NavLink to='/novedades' className={({isActive}) => (isActive ? "active" : '')}>Novedades</NavLink></li>
                                <li><NavLink to='/contacto' className={({isActive}) => (isActive ? "active" : '')}>Contacto</NavLink></li>
                            </ul>
                            <a href="" target="_blank"><i className="fab fa-linkedin"></i></a>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}
export default NavBar