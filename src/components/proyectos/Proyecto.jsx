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
                    <h1>CL??NICA ALCLA</h1>
                    <h2>Edificio para el tratamiento y rehabilitaci??n pedi??trica A??o finalizaci??n: 2014 CABA</h2>
                    <p>La Cl??nica cuenta con una amplia experiencia en el tratamiento y la rehabilitaci??n de ni??os y adultos
                    con patolog??as subagudas y cr??nicas que requieren de instalaciones espec??ficas para su cuidado y
                    recuperaci??n.
                    </p>
                    <p>
                    Este nuevo cuerpo de internaci??n ocupar?? el terreno lindero sobre la calle Campos Salles y se
                    articular?? y complementar?? con las edificaciones existentes en la calle Vuelta de Obligado, para lo
                    cual se desarroll?? un plan maestro que posibilite la integraci??n funcional entre ambos, ampliando y
                    mejorando ??reas de apoyos y servicios que les ser??n comunes, racionalizando as?? su utilizaci??n.
                    </p>
                    <p><b>Ver + Info</b>: <img src={IconoPdf} alt="" width="80" /></p>
                </div>
            </div>
        </>
    );
}
export default Proyecto;