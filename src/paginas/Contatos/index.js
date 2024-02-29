import ListaContatos from "componentes/ListaContatos"
import "./Contatos.css"
import ListaRedes from "componentes/ListaRedes"

const PageContatos = () => {
    return (
        <main>
            <section className="contatos">
                <div className="container container_contatos">
                    <h1>Entre em contato com a gente!</h1>
                    <p>Entre em contato com a Clinica, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.</p>
                    <a className="contatos_button" href="https://wa.me/5527999898280?text=Solicito+Atendimento+para+CNPJ">
                        <i className="ri-whatsapp-fill"></i>
                        <p>Whatsapp</p>
                    </a>
                    <ListaContatos fontColor={"#767676"} fontSize={18} lineHeight={2} />
                </div>
                <div className="container container_contatos-redes">
                    <h2>Confira nossas Redes:</h2>
                    <ListaRedes fontColor={"#767676"} fontSize={18} lineHeight={2} />
                </div>
            </section>
        </main>
    )
}

export default PageContatos