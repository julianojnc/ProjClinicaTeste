import "./Home.css"
import Womam from 'assets/img/woman-with-dog.jpg';
import EmCasa from 'assets/img/em-casa.jpg';
import Equipe from 'assets/img/equipe.png';
import Banner from "componentes/Banner";

const PageHome = () => {
  return (
    <main>

      <Banner />

      <section className="clinic-info">
        <section className="clinic-info_description">
        <h3>Algo aqui</h3>
          <article className="desc_img">
            <img src={Womam} alt="Veterinary white woman with a dog" />
          </article>
          <article className="clinic-info_desc_txt">            
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis minus, officia quis aspernatur
              voluptatibus, praesentium similique nisi, sint eos necessitatibus quod asperiores pariatur. Ab
              expedita porro explicabo veritatis libero consectetur!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis minus, officia quis aspernatur
              voluptatibus, praesentium similique nisi, sint eos necessitatibus quod asperiores pariatur. Ab
              expedita porro explicabo veritatis libero consectetur!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis minus, officia quis aspernatur
              voluptatibus, praesentium similique nisi, sint eos necessitatibus quod asperiores pariatur. Ab
              expedita porro explicabo veritatis libero consectetur!</p>
          </article>

          <hr />

        </section>
        <section id="flex-column-reverse" className="clinic-info_description">
        <h3>Equipe qualificada</h3>
          <article className="desc_img">
            <img src={Equipe} alt="Imagem de uma equipe de veterinários" />
          </article>
          <article className="clinic-info_desc_txt">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis minus, officia quis aspernatur
              voluptatibus, praesentium similique nisi, sint eos necessitatibus quod asperiores pariatur. Ab
              expedita porro explicabo veritatis libero consectetur!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis minus, officia quis aspernatur
              voluptatibus, praesentium similique nisi, sint eos necessitatibus quod asperiores pariatur. Ab
              expedita porro explicabo veritatis libero consectetur!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis minus, officia quis aspernatur
              voluptatibus, praesentium similique nisi, sint eos necessitatibus quod asperiores pariatur. Ab
              expedita porro explicabo veritatis libero consectetur!</p>
          </article>

          <hr id="hr-unique" />
        </section>

        <section className="clinic-info_description">
        <h3>Seu pet em <i>casa</i></h3>
          <article className="desc_img">
            <img src={EmCasa} alt="Pet se sentindo em casa" />
          </article>
          <article className="clinic-info_desc_txt">            
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis minus, officia quis aspernatur
              voluptatibus, praesentium similique nisi, sint eos necessitatibus quod asperiores pariatur. Ab
              expedita porro explicabo veritatis libero consectetur!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis minus, officia quis aspernatur
              voluptatibus, praesentium similique nisi, sint eos necessitatibus quod asperiores pariatur. Ab
              expedita porro explicabo veritatis libero consectetur!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis minus, officia quis aspernatur
              voluptatibus, praesentium similique nisi, sint eos necessitatibus quod asperiores pariatur. Ab
              expedita porro explicabo veritatis libero consectetur!</p>
          </article>
          <hr />
        </section>
      </section>
    </main>
  )
}

export default PageHome
