import './Contacto.css';
const Contacto = () => {
    return(
        <>
            <div className="container padd-global">
                <iframe src="https://www.google.com/maps/embed?pb=!4v1667197264575!6m8!1m7!1sNYUCtdbeh8fZbZLQlsldog!2m2!1d-34.58926825633939!2d-58.40195904386048!3f254.78280818476696!4f14.09512950095079!5f0.7820865974627469"></iframe>
                <div className="infoContacto">
                    <p className='m-0'>French 2699 2° piso (C1425AWC)</p>
                    <p className='m-0'>Ciudad de Buenos Aires - Argentina</p>
                    <a href='mailto:info@afs-arq.com.ar'>info@afs-arq.com.ar</a>
                    <p className='m-0'>Tel: +54 11 4805-5485</p>
                    <br />
                    <a href='mailto:info@afs-arq.com.ar'><button type="button" className="btn btn-secondary ContactoEmail">Email</button></a>
                    <a href="https://www.google.com/maps/@-34.5892683,-58.401959,3a,82.2y,254.78h,104.1t/data=!3m6!1e1!3m4!1sNYUCtdbeh8fZbZLQlsldog!2e0!7i16384!8i8192" target="_blank"><button type="button" className="btn btn-secondary">Ver Mapa</button></a>
                </div>
                <hr className='mb-0' />
            </div>
        </>
    );
}
export default Contacto