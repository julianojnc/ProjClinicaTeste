import './NotFound.css'
import ImgNotFound from 'assets/img/dog-not-found.png';
import MenuLink from 'componentes/MenuLink';

const PageNotFound = () => {
    return (
        <main>
            <section className="pagenotfound">
                <div className="pagenotfound-content">
                    <h1>OOPS! PAGINA NÃO ENCONTRADA!</h1>
                    <p>Erro 404, pagina procurada não encontrada!</p>
                    <MenuLink to='/'><p>Voltar ao Site</p></MenuLink>
                </div>
                <div className="pagenotfound-img">
                    <img src={ImgNotFound} alt="a" />
                </div>
            </section>
        </main>
    )
}

export default PageNotFound