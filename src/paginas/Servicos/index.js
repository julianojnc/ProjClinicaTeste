import Card from "componentes/Card";
import CardIcon from "componentes/IconCirurgia";
import IconExames from "componentes/IconExames";
import IconVacina from "componentes/IconVacina";
import "./Servicos.css";

const PageServicos = () => {    

    const subCirurgias = [
        "Cesariana",
        "Hérnias",
        "Cistotomia",
        "Gastrotomias",
        "Castração",
    ];

    const subVacinas = [
        "V8 ou V10",
        "Gripe canina",
        "Giárdia",
        "Antirrábica",
        "Leishmaniose",
    ];

    const subExames = [
        "Check-up",
        "Ultrassonografia",
        "Exame de sangue",
        "Exames de fezes",
        "Raio X",
    ];


    return (
        <section className="services">            
            <article className="infoservices">
                <h1>Serviços</h1>
                <p>
                    Com mais de 10 anos no mercado, Bichinho Solto já conquistou clientes de
                    inúmeros países com seus tratamentos exclusivos e totalmente naturais
                </p>
            </article>
            <ul className="sevicescards">
                <Card cardicon={<CardIcon />} itens={subCirurgias} titulo="Cirurgias" descricao="Cirurgias veterinárias especializadas para uma vida mais saudável e feliz"/>
                <Card cardicon={<IconVacina />} itens={subVacinas} titulo="Vacinas" descricao="Vacinas veterinárias para uma vida longa e cheia de saúde para o seu melhor amigo!"/>
                <Card cardicon={<IconExames />} itens={subExames} titulo="Exames" descricao="Exames veterinários para cuidar com amor da saúde do seu companheiro peludo!"/>
            </ul>
        </section>
    )
}

export default PageServicos;
