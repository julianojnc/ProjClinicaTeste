import { FaWaze } from "react-icons/fa"
import "./DialogEndereco.css"

const DialogEndereco = ({ onClose, urlIframe, urlWazer, urlGoogle }) => {
    return (

        <div className="overlay">
            <div className="dialog">
                <div className="dialog-header">
                    <div className="dialog-titulo">
                        <h1>Como Chegar:</h1>
                    </div>
                    <div className="close">
                        <a className="close-btn" onClick={() => onClose()}>&times;</a>
                    </div>
                </div>
                <section className="layoutdialog">
                    <article className="infodialog">

                        <ul className="infodialogend">
                            <li>Endereço: A. Peixoto, 14</li>
                            <li>Município: Vila Velha - ES</li>
                            <li>Cep: 29179-254</li>
                        </ul>
                    </article>
                    <section className="mapdialog">
                        <article className="dialogiframe">
                            <iframe
                                className="map"
                                src={urlIframe}
                                style={{ border: '0' }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </article>
                        <article className="dialogbutton">
                            <ul className="dialogbuttonmap">
                                <li><a
                                    href={urlWazer}><FaWaze /> Wazer</a></li>
                                <li><a href={urlGoogle}><i
                                    className="bx bxs-map"></i> Google</a></li>
                            </ul>
                        </article>
                    </section>
                </section>
            </div>
        </div>
    )
}

export default DialogEndereco