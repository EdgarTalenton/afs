import SubMenu from "./SubMenu";
import ImgSocio from "../../utils/img/nosotros/socios.jpg";

const Socios = () => {
    return(
        <div className="container padd-global">
            <SubMenu />
            <div className="sociosImg row">
                <div className="col-md-4">
                    <div className="SociosBoxImg" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                        <img src={ImgSocio} className="w-100" alt=""  />
                        <h3 className="m-0">Arq. Liliana Font</h3>
                        <p className="m-0">Socia</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="SociosBoxImg" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                        <img src={ImgSocio} className="w-100" alt="" />
                        <h3 className="m-0">Arq. Alfredo Sartorio</h3>
                        <p className="m-0">Socio</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="SociosBoxImg" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                        <img src={ImgSocio} className="w-100" alt="" />
                        <h3 className="m-0">Arq. Javier Sartorio</h3>
                        <p className="m-0">Socio</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="SociosBoxImg" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                        <img src={ImgSocio} className="w-100" alt="" />
                        <h3 className="m-0">Arq. Marcelo Fattorini</h3>
                        <p className="m-0">Socio</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="SociosBoxImg" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                        <img src={ImgSocio} className="w-100" alt="" />
                        <h3 className="m-0">Arq. Guillermo Toscano</h3>
                        <p className="m-0">Socio</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="SociosBoxImg" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                        <img src={ImgSocio} className="w-100" alt="" />
                        <h3 className="m-0">Arq. Nora Kogan</h3>
                        <p className="m-0">Socia</p>
                    </div>
                </div>
            </div>
            <hr className='mb-0' />
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modalSociosOpen modal-body row">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className="col-md-8">
                                <h2 className="m-0">Arq. Liliana Font</h2>
                                <p className="subttSocios">Socia</p>
                                <div className="sociosModalDescripcion">
                                    <p>Socia fundadora de AFS ARQUITECTOS, Estudio de arquitectura especializado en  Planificaci??n y Dise??o Hospitalario desde hace 45 a??os, con sede en la ciudad de Buenos Aires.</p>
                                    <p>Liliana ha estado a cargo de muchos proyectos relacionados con la atenci??n m??dica, incluida la planificaci??n maestra, dise??o y supervisi??n de la construcci??n de nuevas instalaciones, ampliaciones o mejoras de las existentes edificaciones y servicios de consultor??a t??cnica para la atenci??n de la salud privada o estatal. Instituciones en Argentina y varios pa??ses de Am??rica Latina.</p>
                                    <p className="mb-0">Miembro fundador y ex presidente de AADAIH (Asociaci??n Argentina de Arquitectura e Ingenier??a Hospitalaria). Presidente de los Congresos Latinoamericanos de la AADAIH en Buenos Aires, a??os 1993, 1998 y 2006.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src={ImgSocio} className="w-100" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Socios;