const CardInfo = (props) => {
    return (
        <ul>
            <li className="infocardstitle"><h1>{props.titulo}</h1></li>
            <li className="infocardsdesc">
                <p>
                    {props.descricao}
                </p>
            </li>
        </ul>
    )
}

export default CardInfo;
