import { Link } from "react-router-dom";

const SubMenu = () => {
    return(
        <ul className='subMenuNosotros'>
            <li><Link to='/nosotros/socios'>Socios</Link></li>
            <li>/</li>
            <li><Link to='/nosotros/colaboradores'>Colaboradores</Link></li>
            <li>/</li>
            <li><Link to='/nosotros/consultores'>Consultores</Link></li>
            <li>/</li>
            <li><Link to='/nosotros/competencia'>Competencia</Link></li>
        </ul>
    );
}
export default SubMenu;