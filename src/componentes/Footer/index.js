import "./Footer.css"
import { FaWaze } from "react-icons/fa";

const Footer = ({ urlIframe, urlWazer, urlGoogle }) => {

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
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">                        
                </iframe>

            </section>
        </footer>

    )
}

export default Footer