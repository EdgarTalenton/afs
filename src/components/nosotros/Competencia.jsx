import SubMenu from "./SubMenu";

const Competencia = () => {
    return(
        <div className="container padd-global">
            <SubMenu />
            <div className="competenciaBox">
                <h2 className="text-center">Areas de Competencia</h2>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="listaCompetencia">
                            <li>▶ PLANIFICACIÓN ESTRATÉGICA Y
                            PROGRAMACIÓN FÍSICO FUNCIONAL</li>
                            <li>▶ ESTUDIOS DE FACTIBILIDAD</li>
                            <li>▶ GESTIÓN DE PROYECTOS</li>
                            <li>▶ DISEÑO INTEGRAL DEL RECURSO
                            FÍSICO EN SALUD, INCLUYENDO
                            EQUIPAMIENTO E INSTALACIONES</li>
                            <li>▶ DISEÑO BIOAMBIENTAL, EFICIENCIA
                            ENERGÉTICA Y ARQUITECTURA
                            SUSTENTABLE</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="listaCompetencia">
                            <li>▶ DISEÑO DE INTERIORES, INCLUYENDO
                                ILUMINACIÓN, COLOR, MOBILIARIO
                                Y DECORACIÓN</li>
                            <li>▶ GESTIÓN DE LA CONSTRUCCIÓN</li>
                            <li>▶ CONTROL DE CRONOGRAMAS,
                                CALIDAD Y COSTOS</li>
                            <li>▶ DIRECCIÓN TÉCNICA, ADMINISTRACIÓN
                                Y PUESTA EN MARCHA DE OBRAS</li>
                            <li>▶ IMAGEN CORPORATIVA</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="mb-0" />
        </div>
    );
}
export default Competencia;