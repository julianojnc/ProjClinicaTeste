import React, { useState } from 'react';
import CardIcon from 'componentes/CardIcon';
import CardInfo from 'componentes/CardInfo';
import SubCard from 'componentes/SubCard';
import "./Card.css";

const Card = (props) => {
  const tituloCard = `${props.titulo}`;
  const descricaoCard = `${props.descricao}`;
  const itensSubCard = `${props.itens}`;
  const [mostrarSubcard, setMostrarSubcard] = useState();

  const toggleSubcard = () => {
    setMostrarSubcard(!mostrarSubcard);
  };

    return(
        <li>
          <section className="card">
            <section className="cardbox">
              <ul className="infocards">
                <CardIcon Onclick={toggleSubcard}/>
                <CardInfo titulo={tituloCard} descricao={descricaoCard}/>
                <li  onClick={toggleSubcard} className="buttoncard" id="btn" value="cirurgia">
                  <i
                    id="iconbuttoncard"
                    className="bx bxs-down-arrow"
                  ></i>
                </li>
              </ul>
            </section>

            {mostrarSubcard && (
            <SubCard itens={itensSubCard}/>
            )}
          </section>
        </li>
    )
}

export default Card
