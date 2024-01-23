import Card from "componentes/Card";
import CardIcon from "componentes/IconCirurgia";
import IconExames from "componentes/IconExames";
import IconVacina from "componentes/IconVacina";
import "./Servicos.css";

const PageServicos = () => {    

    const subCirurgias = [
        "1",
        "2",
        "3",
        "4",
        "5",
    ];

    const subVacinas = [
        "6",
        "7",
        "8",
        "9",
        "10",
    ];

    const subExames = [
        "11",
        "12",
        "13",
        "14",
        "15",
    ];

    return (
        <section className="services">            
            <article className="infoservices">
                <h1>Serviços</h1>
                <p>
                    Com mais de 10 anos no mercado, a Clinica já conquistou clientes de
                    inúmeros países com seus tratamentos exclusivos e totalmente naturais
                </p>
            </article>
            <ul className="sevicescards">
                <Card cardicon={<CardIcon />} itens={subCirurgias} titulo="Cirurgias" descricao="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Odit deserunt illo quis illum?"/>
                <Card cardicon={<IconVacina />} itens={subVacinas} titulo="Vacinas" descricao="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Odit deserunt illo quis illum?"/>
                <Card cardicon={<IconExames />} itens={subExames} titulo="Exames" descricao="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Odit deserunt illo quis illum?"/>
            </ul>
        </section>
    )
}

export default PageServicos;
