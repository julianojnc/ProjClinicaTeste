import "./MenuLink.css"
import { Link, useLocation } from "react-router-dom"

const MenuLink = ({ children, to }) => {

    // Em qual pagina esta e estilizar os links no header
    const localizacao = useLocation();

    return (
        <li><Link to={to} className={`${localizacao.pathname === to ? 'linkDestacado' : ''}`}>{children}</Link></li>
    )
}

export default MenuLink