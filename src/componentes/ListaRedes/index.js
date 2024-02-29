

const ListaRedes = ({ fontColor, fontSize, lineHeight}) => {
    return (
        <div className="rede">
            <ul>
                <li>
                    <a href="{#}" style={{ color: fontColor, fontSize: fontSize, lineHeight: lineHeight }}>
                        <i className='bx bxl-instagram-alt'></i>
                        Instagram
                    </a>
                </li>
                <li>
                    <a href="{#}" style={{ color: fontColor, fontSize: fontSize, lineHeight: lineHeight }}>
                        <i className='bx bxl-facebook-circle'></i>
                        Facebook
                    </a>
                </li>
                <li>
                    <a href="{#}" style={{ color: fontColor, fontSize: fontSize, lineHeight: lineHeight }}>
                        <i className='bx bxl-twitter'></i>
                        Twitter
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default ListaRedes