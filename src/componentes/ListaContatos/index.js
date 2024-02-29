const ListaContatos = ({ fontSize, fontColor, lineHeight }) => {
    return (
        <div>
            <ul>
                <li>
                    <a href="{#}" style={{ color: fontColor, fontSize: fontSize, lineHeight: lineHeight}}>
                        <i className="bx bxs-phone"></i>
                        (27) 99999-9999
                    </a>
                </li>
                <li>
                    <a href="{#}" style={{ color: fontColor, fontSize: fontSize, lineHeight: lineHeight}}>
                        <i className="ri-whatsapp-fill"></i>
                        (27) 99999-9999
                    </a>
                </li>
                <li>
                    <a href="{#}" style={{ color: fontColor, fontSize: fontSize, lineHeight: lineHeight}}>
                        <i className='bx bxs-envelope'></i>
                        Clinica@email.com
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default ListaContatos
