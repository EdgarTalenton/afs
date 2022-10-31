import './Novedades.css';
const Novedades = () => {
    return (
        <>
            <div className="container padd-global">
                <div className="boxNovedades row">
                    <div className="col-md-8">
                        <h2>Hospitales de Última Generación</h2>
                        <h6>17/05/21</h6>
                        <p>El Estudio AFS Arquitectos se ha especializado en el diseño de
                        infraestructura para la salud y ha desarrollado proyectos en el ámbito
                        público y en el sector privado (últimamente con énfasis en este último)
                        por más de cuatro décadas. Actualmente, lideran el equipo Liliana
                        Font, Alfredo Sartorio, Javier Sartorio y Marcelo Fattorini como socios
                        del estudio; y Eduardo Bini y Federico Fioressi como asociados.</p>
                    </div>
                    <div className="col-md-4"> 
                        <img src="https://via.placeholder.com/250x200" alt="" className="w-100" />
                    </div>
                </div>
                <div className="boxNovedades row">
                    <div className="col-md-8">
                        <h2>El desafío de diseñar la piel de los edificios</h2>
                        <h6>7/11/18</h6>
                        <p>Compartiendo una visión desde mi formación en disciplinas
                        bioclimáticas y de eficiencia energética, y coincidiendo con el tema
                        que plantea Teresa Egozcue, debemos evitar las fachadas
                        completamente vidriadas, por la conformación del clima en nuestra
                        ciudad. Aun cuando necesitemos una fachada tipo muro cortina de
                        vidrio, siempre podremos incluir sistemas que faciliten la aislación, o
                        la mezcla de vidrios trasparentes con otros opacos y también que se
                        intercalan con placas de acero u otros materiales.</p>
                    </div>
                    <div className="col-md-4"> 
                        <img src="https://via.placeholder.com/250x200" alt="" className="w-100" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Novedades;