import slider1 from '../../utils/img/slider-home/1-UP-San-Martin-S.jpg';
import slider2 from '../../utils/img/slider-home/2-Hospital-Aleman-8-S.jpg';
import slider3 from '../../utils/img/slider-home/3-Finochietto--Acceso-Cordoba-S.jpg';
import slider4 from '../../utils/img/slider-home/4-ALCLA-Fachada-2-S.jpg';
import slider5 from '../../utils/img/slider-home/5-ALCLA-Internacion-S.jpg';
import slider6 from '../../utils/img/slider-home/6-Finochietto-Cafeteria-S.jpg';
import boton1 from '../../utils/img/slider-home/boton1.jpeg';
import boton2 from '../../utils/img/slider-home/boton2.png';
import boton3 from '../../utils/img/slider-home/boton3.jpeg';

import './Home.css';

const Home = () => {
    return(
        <>
        <div className="container-home-fluid">
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
                        <img src={slider1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Más de 40 años en el desarrollo <br /> de emprendimientos para la salud.</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slider2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slider3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slider4} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slider5} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={slider6} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
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
            <div className="secundarioHome">
                <div className="flexbox">
                    <div className="box" style={{backgroundImage: `url(${boton1})`, backgroundSize: 'cover', backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}}>
                        <div className="boxFondo"></div>
                        <p>Nosotros</p>
                    </div>
                    <div className="box" style={{backgroundImage: `url(${boton2})`, backgroundSize: 'cover', backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}}>
                        <div className="boxFondo"></div>
                        <p>Proyectos</p> 
                    </div>
                    <div className="box" style={{backgroundImage: `url(${boton3})`, backgroundSize: 'cover', backgroundPosition: 'center',backgroundRepeat: 'no-repeat'}}>
                        <div className="boxFondo"></div>
                        <p>Novedades</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Home;