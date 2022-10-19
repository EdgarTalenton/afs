import Principal from '../../utils/img/home-principal.jpg';
import './Home.css';

const Home = () => {
    return(
        <>
        <div className="container-home-fluid">
            <div className="principalHome" style={{backgroundImage: `url(${Principal})`, backgroundSize: 'cover'}}>
                <div className="degradeBackground"></div>
                <h1 className='titulo-principal m-0'>Más de 40 años en el desarrollo <br /> de emprendimientos para la salud.</h1>
            </div>
        </div>
        </>
    );
}
export default Home;