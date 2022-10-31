import { NavLink } from "react-router-dom";

const SubMenu = () => {
    return(
        <ul className='subMenuNosotros'>
            <li><NavLink to='/nosotros/socios' className={({isActive}) => (isActive ? "active" : '')}>Socios</NavLink></li>
            <li>/</li>
            <li><NavLink to='/nosotros/colaboradores' className={({isActive}) => (isActive ? "active" : '')}>Colaboradores</NavLink></li>
            <li>/</li>
            <li><NavLink to='/nosotros/consultores' className={({isActive}) => (isActive ? "active" : '')}>Consultores</NavLink></li>
            <li>/</li>
            <li><NavLink to='/nosotros/competencia' className={({isActive}) => (isActive ? "active" : '')}>Competencia</NavLink></li>
        </ul>
    );
}
export default SubMenu;