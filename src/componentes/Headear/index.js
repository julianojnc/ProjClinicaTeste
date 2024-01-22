import "./Header.css"
import { Link, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import MenuLink from "componentes/MenuLink";

const Header = () => {
    // Esconder o Header quando scroll to down ou aparecer quando Scroll to top
    const [position, setPosition] = useState(window.pageYOffset)
    const [visible, setVisible] = useState(true)
    useEffect(() => {
        const handleScroll = () => {
            let moving = window.pageYOffset

            setVisible(position > moving);
            setPosition(moving)
        };
        window.addEventListener("scroll", handleScroll);
        return (() => {
            window.removeEventListener("scroll", handleScroll);
        })
    })
    const bar = visible ? "visible" : "hidden";

    // Menu responsivo
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((open) => !open)
    }

    // Header
    return (
        <>
            <header className={bar}>
                <div className="bar-header">
                    <Link to="/" className="logo"><i className="ri-home-heart-fill"></i><span>Clínica</span></Link>

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
                            <Link ><i className="bx bxs-map"></i>Como Chegar</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>

    )
}

export default Header
