import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import MenuLink from "componentes/MenuLink";
import DialogEndereco from "componentes/DialogEndereco";
import "./Header.css";

const Header = ({ urlIframe, urlWazer, urlGoogle }) => {
    const [position, setPosition] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    // Esconder o Header quando scroll to down ou aparecer quando Scroll to top
    useEffect(() => {
        const handleScroll = () => {
            let moving = window.pageYOffset;
            setVisible(position > moving);
            setPosition(moving);

            // Fechar o menu hamburguer quando o header se esconder
            if (!visible && menuOpen) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [menuOpen, position, visible]);

    const bar = visible ? "visible" : "hidden";

    // Menu responsivo
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Modal Open
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <header className={bar}>
                <div className="bar-header">
                    <Link to="/" className="logo">
                        <i className="ri-home-heart-fill"></i>
                        <span>Bichinho Solto</span>
                    </Link>

                    <ul className={`navbar ${menuOpen ? "open" : ""}`} id="navbar">
                        <MenuLink to='/'>Home</MenuLink>
                        <MenuLink to='/sobre'>Sobre</MenuLink>
                        <MenuLink to='/servicos'>Serviços</MenuLink>
                        <MenuLink to='/contatos'>Contatos</MenuLink>
                    </ul>

                    <div className="main">
                        <div
                            className="bx bx-menu"
                            id="menu-icon"
                            onClick={toggleMenu}>
                        </div>
                    </div>
                </div>

                <div className="subnavbar" id="subnavbar">
                    <ul className="menusubnavbar">
                        <li>
                            <Link to=""><i className="bx bxs-phone"></i>(27)99999-9999</Link>
                        </li>
                        <li>
                            <Link to="https://wa.me/5527999898280?text=Solicito+Atendimento+para+CNPJ"><i className="ri-whatsapp-fill"></i> Whatsapp</Link>
                        </li>
                        <li id="openPopUpMap">
                            <Link onClick={() => setModalOpen(true)}><i className="bx bxs-map"></i>Como Chegar</Link>
                        </li>
                    </ul>
                </div>
            </header>

            {modalOpen && (
                <DialogEndereco onClose={closeModal} urlIframe={urlIframe} urlWazer={urlWazer} urlGoogle={urlGoogle} />
            )}
        </>
    );
};

export default Header;
