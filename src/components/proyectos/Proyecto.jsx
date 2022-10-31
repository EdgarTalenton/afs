import { useParams } from 'react-router-dom';
import IconoPdf from '../../utils/img/proyectos/PDF-download-icon.png'
const Proyecto = () => {

    const {proyecto} = useParams();
    return(
        <>
            <div className="container padd-global">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://via.placeholder.com/1000x540" className="d-block w-100" alt="..." />
                            
                        </div>
                        <div className="carousel-item">
                            <img src="https://via.placeholder.com/1000x540" className="d-block w-100" alt="..." />
                            
                        </div>
                        <div className="carousel-item">
                            <img src="https://via.placeholder.com/1000x540" className="d-block w-100" alt="..." />
                            
                        </div>
                        <div className="carousel-item">
                            <img src="https://via.placeholder.com/1000x540" className="d-block w-100" alt="..." />
                            
                        </div>
                        <div className="carousel-item">
                            <img src="https://via.placeholder.com/1000x540" className="d-block w-100" alt="..." />
                            
                        </div>
                        <div className="carousel-item">
                            <img src="https://via.placeholder.com/1000x540" className="d-block w-100" alt="..." />
                           
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="campoTextoProyecto">
                    <h1>CLÍNICA ALCLA</h1>
                    <h2>Edificio para el tratamiento y rehabilitación pediátrica Año finalización: 2014 CABA</h2>
                    <p>La Clínica cuenta con una amplia experiencia en el tratamiento y la rehabilitación de niños y adultos
                    con patologías subagudas y crónicas que requieren de instalaciones específicas para su cuidado y
                    recuperación.
                    </p>
                    <p>
                    Este nuevo cuerpo de internación ocupará el terreno lindero sobre la calle Campos Salles y se
                    articulará y complementará con las edificaciones existentes en la calle Vuelta de Obligado, para lo
                    cual se desarrolló un plan maestro que posibilite la integración funcional entre ambos, ampliando y
                    mejorando áreas de apoyos y servicios que les serán comunes, racionalizando así su utilización.
                    </p>
                    <p><b>Ver + Info</b>: <img src={IconoPdf} alt="" width="80" /></p>
                </div>
            </div>
        </>
    );
}
export default Proyecto;