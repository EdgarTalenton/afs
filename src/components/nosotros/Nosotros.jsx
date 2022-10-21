import './Nosotros.css';
import grupal from '../../utils/img/nosotros/A-Nosotros-grupal-boceto.jpg';
import { Link } from 'react-router-dom';

const Nosotros = () => {
    return(
        <>
        <div className="container padd-global">
            <ul className='subMenuNosotros'>
                <li><Link to='/'>Socios</Link></li>
                <li>/</li>
                <li><Link to='/'>Colaboradores</Link></li>
                <li>/</li>
                <li><Link to='/'>Consultores</Link></li>
                <li>/</li>
                <li><Link to='/'>Competencia</Link></li>
            </ul>
            <p className='parrafo'>Con sede en Buenos Aires, el estudio AFS Arquitectos está compuesto por capacitados profesionales entrenados en el trabajo interdisciplinario y participativo que se ha desempeñado en los ámbitos público y privado. AFS Arquitectos se especializa en emprendimientos para la Salud. La permanente capacitación y actualización de su equipo de trabajo y el número de proyectos y edificios realizados lo ubican entre los equipos líderes en programación, diseño y construcción de edificios en Argentina.</p>
            <img src={grupal} alt="" className='w-100' />
            <p className="parrafo">El estudio incorpora a su equipo de diseño la constante colaboración de asesores en programación y planificación de emprendimientos, eficiencia energética y sustentabilidad, instalaciones eléctricas, sanitarias, termomecánicas, tratamiento del aire, seguridad, impacto ambiental, equipamiento y aspectos reglamentarios de acuerdo con los requerimientos del proyecto.</p>
            <hr className='mb-0' />
        </div>
        </>
    );
}
export default Nosotros;