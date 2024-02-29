import "./Home.css"
import Womam from 'assets/img/woman-with-dog.jpg';
import EmCasa from 'assets/img/em-casa.jpg';
import Equipe from 'assets/img/equipe.png';
import Banner from "componentes/Banner";
import ContentHome from "componentes/ContentHome";
import ContentHomeIn from "componentes/ContentHomeIn";

const PageHome = () => {
  const texto = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis minus, officia quis aspernatur voluptatibus, praesentium similique nisi, sint eos necessitatibus quod asperiores pariatur. Abexpedita porro explicabo veritatis libero consectetur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis minus, officia quis aspernatur voluptatibus, praesentium similique nisi, sint eos necessitatibus quod asperiores pariatur. Abexpedita porro explicabo veritatis libero consectetur!'

  return (
    <main>

      <Banner />

      <section className="clinic-info">

        <ContentHome img={Womam} titulo='Clinica' texto={texto} />
        <ContentHomeIn img={Equipe} titulo='Equipe qualificada' texto={texto} />
        <ContentHome img={EmCasa} titulo={`Seu pet em casa`} texto={texto} />

      </section>
    </main>
  )
}

export default PageHome
