import "./Footer.css"
import { FaWaze } from "react-icons/fa";

const Footer = () => {

    const urlIframe = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1575.1863041658366!2d-40.29601428382165!3d-20.11545259430846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1697802978643!5m2!1spt-BR!2sbr";
    const urlWazer = "https://www.waze.com/pt-BR/live-map/directions/br/es/rua-angelim-da-mata?navigate=yes&to=place.EkNSLiBBbmdlbGltIGRhIE1hdGEgLSBDZW50cm8gZGEgU2VycmEsIFNlcnJhIC0gRVMsIDI5MTc5LTI1NCwgQnJhemlsIi4qLAoUChIJh_wCF0X1twARjAstOVur1qQSFAoSCRkgHRRo9bcAEWVzQ0bxvhDf";
    const urlGoogle = "https://www.google.com/maps/@-20.115453,-40.296014,17z?hl=pt-BR&entry=ttu"

    return (

        <footer>

            <hr></hr>

            <section className="footerrede">
                <h1>Nome da Clinica</h1>
                <article className="pfooter">
                    <p>Frase Bonita referente a Clinica</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora consequatur iste expedita odio
                        necessitatibus, numquam quis minima do</p>
                </article>
                <article className="rede">
                    <ul>
                        <li><a href="{#}"><i className='bx bxl-instagram-alt'></i> Instagram</a></li>
                        <li><a href="{#}"><i className='bx bxl-facebook-circle'></i> Facebook</a></li>
                        <li><a href="{#}"><i className='bx bxl-twitter'></i> Twitter</a></li>
                    </ul>
                </article>
            </section>

            <hr></hr>

            <section className="footercontatos">
                <h1>Contatos</h1>
                <ul>
                    <li><a href="{#}"><i className="bx bxs-phone"></i> (27) 99999-9999</a></li>
                    <li><a href="{#}"><i className="ri-whatsapp-fill"></i> (27) 99999-9999</a></li>
                    <li><a href="{#}"><i className='bx bxs-envelope'></i> Clinica@email.com</a></li>
                </ul>
            </section>

            <hr></hr>

            <section className="footermapa">
                <h1>Como Chegar:</h1>
                <p><i className=""></i> A. Peixoto, 14, Vila Velha - ES, 29179-254</p>

                <ul>
                    <li><a
                        href={urlWazer}><FaWaze /> Wazer</a></li>
                    <li><a href={urlGoogle}><i
                        className="bx bxs-map"></i> Google</a></li>
                </ul>

                <iframe 
                    title="Map" 
                    className="map"
                    src={urlIframe}
                    style={{ border: "0" }} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">                        
                </iframe>

            </section>
        </footer>

    )
}

export default Footer