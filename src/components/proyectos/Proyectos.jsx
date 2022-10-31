import { Link } from 'react-router-dom';
import './proyectos.css';
import ImgPoryectos from "../../utils/img/proyectos/MtajwDmw.jpg";

const Proyectos = () => {
    return(
        <>
            <div className="container padd-global">
                <div className="imgGaleriaProyectos">
                    <ul className="sl-grid-body">
                        <li className='sl-grid-cell'>
                            <Link to='./proyecto' className='sl-link'>
                                <div className="sl-grid-thumbnail-container">
                                    <img alt="" className="icon w-100 thumbnail-image--loaded sl-grid-thumbnail" src={ ImgPoryectos } />
                                    <div className="degradeBackground"></div>
                                    <div className="boxTextProyectos">
                                        <h2 className='m-0'>Clínica ALCLA</h2>
                                        <p className='m-0'>Buenos Aires</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className='sl-grid-cell'>
                            <Link to='./proyecto' className='sl-link'>
                                <div className="sl-grid-thumbnail-container">
                                    <img alt="" className="icon w-100 thumbnail-image--loaded sl-grid-thumbnail" src="https://uc78c76882c81bd7232b11e73817.previews.dropboxusercontent.com/p/thumb/ABujgAw2FP-Z1ZZKKlhJ3dHad5a_rIYfmyZwja710SiQ66LLUhU1z4a8ETJu0pcqBw9qPcFjGWDU-HN2uu88orUFb0xaFJVkx3hQZTdiGyyx5NfWIY2Rw6Jnj8-Z7uiHfGk7MqYwdicyEAa-z0dEe-9AxKUET9Mvf9V1aahWELtpk4zkBNBfykiE2vzDJ1UyrVpSrGYT2f1ir2HxJ7DZLwIFB1s_Xqt1yFDtkDDP1Gppc0PjnTl7o2F29FKxtvL8BoXAnsALwhEm909fm7C4-cm_KJoqc6Q4LG3Vge36zIZk3hF6COWgYP0SsP1dVYIbhqkS-nvpQKsTrBkJ0Dd2ZOkhp0ij7YSTm50U87Vbef4RuXAwg6wQUUtAIOjJwIRJj2qO4bRgmXXsY2bWQmun8bTfsnEm9DFHwzn9qtFt4gEO7ZQF9zHDyLfUza12pRIWGcgjbpBRxqvoHxAYhdeiYj_9/p.jpeg?size=512x512&amp;size_mode=1" />
                                    <div className="degradeBackground"></div>
                                    <div className="boxTextProyectos">
                                        <h2 className='m-0'>Clínica ALCLA</h2>
                                        <p className='m-0'>Buenos Aires</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className='sl-grid-cell'>
                            <Link to='./proyecto' className='sl-link'>
                                <div className="sl-grid-thumbnail-container">
                                    <img alt="" className="icon w-100 thumbnail-image--loaded sl-grid-thumbnail" src="https://uc78c76882c81bd7232b11e73817.previews.dropboxusercontent.com/p/thumb/ABujgAw2FP-Z1ZZKKlhJ3dHad5a_rIYfmyZwja710SiQ66LLUhU1z4a8ETJu0pcqBw9qPcFjGWDU-HN2uu88orUFb0xaFJVkx3hQZTdiGyyx5NfWIY2Rw6Jnj8-Z7uiHfGk7MqYwdicyEAa-z0dEe-9AxKUET9Mvf9V1aahWELtpk4zkBNBfykiE2vzDJ1UyrVpSrGYT2f1ir2HxJ7DZLwIFB1s_Xqt1yFDtkDDP1Gppc0PjnTl7o2F29FKxtvL8BoXAnsALwhEm909fm7C4-cm_KJoqc6Q4LG3Vge36zIZk3hF6COWgYP0SsP1dVYIbhqkS-nvpQKsTrBkJ0Dd2ZOkhp0ij7YSTm50U87Vbef4RuXAwg6wQUUtAIOjJwIRJj2qO4bRgmXXsY2bWQmun8bTfsnEm9DFHwzn9qtFt4gEO7ZQF9zHDyLfUza12pRIWGcgjbpBRxqvoHxAYhdeiYj_9/p.jpeg?size=512x512&amp;size_mode=1" />
                                    <div className="degradeBackground"></div>
                                    <div className="boxTextProyectos">
                                        <h2 className='m-0'>Clínica ALCLA</h2>
                                        <p className='m-0'>Buenos Aires</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className='sl-grid-cell'>
                            <Link to='./proyecto' className='sl-link'>
                                <div className="sl-grid-thumbnail-container">
                                    <img alt="" className="icon w-100 thumbnail-image--loaded sl-grid-thumbnail" src="https://uc78c76882c81bd7232b11e73817.previews.dropboxusercontent.com/p/thumb/ABujgAw2FP-Z1ZZKKlhJ3dHad5a_rIYfmyZwja710SiQ66LLUhU1z4a8ETJu0pcqBw9qPcFjGWDU-HN2uu88orUFb0xaFJVkx3hQZTdiGyyx5NfWIY2Rw6Jnj8-Z7uiHfGk7MqYwdicyEAa-z0dEe-9AxKUET9Mvf9V1aahWELtpk4zkBNBfykiE2vzDJ1UyrVpSrGYT2f1ir2HxJ7DZLwIFB1s_Xqt1yFDtkDDP1Gppc0PjnTl7o2F29FKxtvL8BoXAnsALwhEm909fm7C4-cm_KJoqc6Q4LG3Vge36zIZk3hF6COWgYP0SsP1dVYIbhqkS-nvpQKsTrBkJ0Dd2ZOkhp0ij7YSTm50U87Vbef4RuXAwg6wQUUtAIOjJwIRJj2qO4bRgmXXsY2bWQmun8bTfsnEm9DFHwzn9qtFt4gEO7ZQF9zHDyLfUza12pRIWGcgjbpBRxqvoHxAYhdeiYj_9/p.jpeg?size=512x512&amp;size_mode=1" />
                                    <div className="degradeBackground"></div>
                                    <div className="boxTextProyectos">
                                        <h2 className='m-0'>Clínica ALCLA</h2>
                                        <p className='m-0'>Buenos Aires</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className='sl-grid-cell'>
                            <Link to='./proyecto' className='sl-link'>
                                <div className="sl-grid-thumbnail-container">
                                    <img alt="" className="icon w-100 thumbnail-image--loaded sl-grid-thumbnail" src="https://uc78c76882c81bd7232b11e73817.previews.dropboxusercontent.com/p/thumb/ABujgAw2FP-Z1ZZKKlhJ3dHad5a_rIYfmyZwja710SiQ66LLUhU1z4a8ETJu0pcqBw9qPcFjGWDU-HN2uu88orUFb0xaFJVkx3hQZTdiGyyx5NfWIY2Rw6Jnj8-Z7uiHfGk7MqYwdicyEAa-z0dEe-9AxKUET9Mvf9V1aahWELtpk4zkBNBfykiE2vzDJ1UyrVpSrGYT2f1ir2HxJ7DZLwIFB1s_Xqt1yFDtkDDP1Gppc0PjnTl7o2F29FKxtvL8BoXAnsALwhEm909fm7C4-cm_KJoqc6Q4LG3Vge36zIZk3hF6COWgYP0SsP1dVYIbhqkS-nvpQKsTrBkJ0Dd2ZOkhp0ij7YSTm50U87Vbef4RuXAwg6wQUUtAIOjJwIRJj2qO4bRgmXXsY2bWQmun8bTfsnEm9DFHwzn9qtFt4gEO7ZQF9zHDyLfUza12pRIWGcgjbpBRxqvoHxAYhdeiYj_9/p.jpeg?size=512x512&amp;size_mode=1" />
                                    <div className="degradeBackground"></div>
                                    <div className="boxTextProyectos">
                                        <h2 className='m-0'>Clínica ALCLA</h2>
                                        <p className='m-0'>Buenos Aires</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className='sl-grid-cell'>
                            <Link to='./proyecto' className='sl-link'>
                                <div className="sl-grid-thumbnail-container">
                                    <img alt="" className="icon w-100 thumbnail-image--loaded sl-grid-thumbnail" src="https://uc78c76882c81bd7232b11e73817.previews.dropboxusercontent.com/p/thumb/ABujgAw2FP-Z1ZZKKlhJ3dHad5a_rIYfmyZwja710SiQ66LLUhU1z4a8ETJu0pcqBw9qPcFjGWDU-HN2uu88orUFb0xaFJVkx3hQZTdiGyyx5NfWIY2Rw6Jnj8-Z7uiHfGk7MqYwdicyEAa-z0dEe-9AxKUET9Mvf9V1aahWELtpk4zkBNBfykiE2vzDJ1UyrVpSrGYT2f1ir2HxJ7DZLwIFB1s_Xqt1yFDtkDDP1Gppc0PjnTl7o2F29FKxtvL8BoXAnsALwhEm909fm7C4-cm_KJoqc6Q4LG3Vge36zIZk3hF6COWgYP0SsP1dVYIbhqkS-nvpQKsTrBkJ0Dd2ZOkhp0ij7YSTm50U87Vbef4RuXAwg6wQUUtAIOjJwIRJj2qO4bRgmXXsY2bWQmun8bTfsnEm9DFHwzn9qtFt4gEO7ZQF9zHDyLfUza12pRIWGcgjbpBRxqvoHxAYhdeiYj_9/p.jpeg?size=512x512&amp;size_mode=1" />
                                    <div className="degradeBackground"></div>
                                    <div className="boxTextProyectos">
                                        <h2 className='m-0'>Clínica ALCLA</h2>
                                        <p className='m-0'>Buenos Aires</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <ul className="nav nav-pills mb-0 nav-proyectos-list" id="pills-tab" role="tablist">
                    <li className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                        SALUD
                    </li>
                    <li className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">
                        OTROS
                    </li>
                </ul>
                <div className="tab-content contentProyectosList" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className="box-lista-trabajos overflow-auto">
                            <h2>SANATORIO OTAMENDI - SANATORIO LAS LOMAS - CENTRO NORDELTA- MEDICUS</h2>
                            <ul>
                                <li>
                                    <div className="box-lista">
                                        <h3>SANATORIO OTAMENDI, CABA</h3>
                                        <p>200x-22 Plan Maestro, xxx m2, en curso</p>
                                        <p>Proyectos Parciales: Centro Obstétrico, Fachada y Acceso, Central de Potencia, Vestuarios, Centro de la Mujer, Endoscopia . Asistencia Técnica permanente.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="box-lista">
                                        <h3>SANATORIO LAS LOMAS, San Isidro, Prov de Bs Aires</h3>
                                        <p>2019 Plan Maestro, xxx m2</p>
                                        <p>2022 Centro Ambulatorio, xxx m2</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="box-lista">
                                        <h3>CENTRO NORDELTA, Tigre, Prov. de Bs Aires</h3>
                                        <p>2020-22 Ampliación Centro Ambulatorio , Cirugía, Endoscopia, Consultorios, Infraestructura, xxx m2, obra en curso.</p>
                                    </div>
                                </li>
                            </ul>
                            <h2>INSTITUTO QUIRURGICO DEL CALLAO - SANATORIO ANCHORENA SAN MARTIN - SANATORIO ANCHORENA ITOIZ - UPCN ZARATE</h2>
                            <ul>
                                <li>
                                    <div className="box-lista">
                                        <h3>INSTITUTO QUIRURGICO DEL CALLAO, IQC, CABA</h3>
                                        <p>1995-97 Refuncionalización para Centro de Cirugía AmbulatorIa, 5500 m2</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="box-lista">
                                        <h3>SANATORIO ANCHORENA SAN MARTIN , San Martín, Prov de Bs Aires</h3>
                                        <p>2013-16 Obra nueva sanatorio polivalente y edificio ambulatorio, 22.500 m2, en asociación con Arq. Gastón Flores.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="box-lista">
                                        <h3>SANATORIO ANCHORENA ITOIZ, Avellaneda, Prov de Bs Aires</h3>
                                        <p>2014-22 Plan Maestro conjunto 13.500 m2</p>
                                        <p>2018-21 Obra nueva sanatorio polivalente xxxx m2</p>
                                        <p>2022 Refuncionalización y ampliación sobre Belgrano, xxx m2, en curso.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="box-lista">
                                        <h3>UPCN ZARATE , Zárate ,Prov Bs Aires</h3>
                                        <p>2021-22 Refuncionalización Sanatorio Polivalente xxx m2</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div className="box-lista-trabajos overflow-auto">
                            <h2>SANATORIO OTAMENDI - SANATORIO LAS LOMAS - CENTRO NORDELTA- MEDICUS</h2>
                            <ul>
                                <li>
                                    <div className="box-lista">
                                        <h3>SANATORIO OTAMENDI, CABA</h3>
                                        <p>200x-22 Plan Maestro, xxx m2, en curso</p>
                                        <p>Proyectos Parciales: Centro Obstétrico, Fachada y Acceso, Central de Potencia, Vestuarios, Centro de la Mujer, Endoscopia . Asistencia Técnica permanente.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="box-lista">
                                        <h3>SANATORIO LAS LOMAS, San Isidro, Prov de Bs Aires</h3>
                                        <p>2019 Plan Maestro, xxx m2</p>
                                        <p>2022 Centro Ambulatorio, xxx m2</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="box-lista">
                                        <h3>CENTRO NORDELTA, Tigre, Prov. de Bs Aires</h3>
                                        <p>2020-22 Ampliación Centro Ambulatorio , Cirugía, Endoscopia, Consultorios, Infraestructura, xxx m2, obra en curso.</p>
                                    </div>
                                </li>
                            </ul>
                            <h2>INSTITUTO QUIRURGICO DEL CALLAO - SANATORIO ANCHORENA SAN MARTIN - SANATORIO ANCHORENA ITOIZ - UPCN ZARATE</h2>
                            <ul>
                                <li>
                                    <div className="box-lista">
                                        <h3>INSTITUTO QUIRURGICO DEL CALLAO, IQC, CABA</h3>
                                        <p>1995-97 Refuncionalización para Centro de Cirugía AmbulatorIa, 5500 m2</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="box-lista">
                                        <h3>SANATORIO ANCHORENA SAN MARTIN , San Martín, Prov de Bs Aires</h3>
                                        <p>2013-16 Obra nueva sanatorio polivalente y edificio ambulatorio, 22.500 m2, en asociación con Arq. Gastón Flores.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="box-lista">
                                        <h3>SANATORIO ANCHORENA ITOIZ, Avellaneda, Prov de Bs Aires</h3>
                                        <p>2014-22 Plan Maestro conjunto 13.500 m2</p>
                                        <p>2018-21 Obra nueva sanatorio polivalente xxxx m2</p>
                                        <p>2022 Refuncionalización y ampliación sobre Belgrano, xxx m2, en curso.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="box-lista">
                                        <h3>UPCN ZARATE , Zárate ,Prov Bs Aires</h3>
                                        <p>2021-22 Refuncionalización Sanatorio Polivalente xxx m2</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Proyectos