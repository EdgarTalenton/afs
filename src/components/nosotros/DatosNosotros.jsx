import { useParams } from 'react-router-dom';
import Error404 from '../../error-404';
import Colaboradores from './Colaboradores';
import Competencia from './Competencia';
import Consultores from './Consultores';
import Socios from './Socios';
const DatosNosotros = () => {

    const {nosotros} = useParams();
    if(nosotros === 'socios') {
        return (
            <Socios />
        );
    }else if (nosotros === 'colaboradores') {
        return (
            <Colaboradores />
        );
    }else if (nosotros === 'consultores') {
        return (
            <Consultores />
        )
    }else if (nosotros === 'competencia') {
        return (
            <Competencia />
        )
    } else {
        return (
            <Error404 />
        )
    }
    
}
export default DatosNosotros;