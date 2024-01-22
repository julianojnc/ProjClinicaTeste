import "./Header.css"
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";

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
                        <li><Link to="/" className="active">Home</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link to="/servicos">Serviços</Link></li>
                        <li><Link to="/contatos">Contatos</Link></li>
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
                            <a href="{#}"><i className="bx bxs-phone"></i>(27)99999-9999</a>
                        </li>
                        <li>
                            <a href="{#}"><i className="ri-whatsapp-fill"></i> Whatsapp</a>
                        </li>
                        <li id="openPopUpMap">
                            <a href="{#}"><i className="bx bxs-map"></i>Como Chegar</a>
                        </li>
                    </ul>
                </div>
            </header>
        </>

    )
}

export default Header
