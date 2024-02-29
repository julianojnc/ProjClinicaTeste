import Header from './componentes/Headear';
import Footer from './componentes/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageHome from 'paginas/Home';
import PageServicos from 'paginas/Servicos';
import PageSobre from 'paginas/Sobre';
import PageContatos from 'paginas/Contatos';
import ScrollToTop from 'componentes/ScrollToTop';
import PageNotFound from 'paginas/NotFound';

function RoutersApp() {

    const urlIframe = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1575.1863041658366!2d-40.29601428382165!3d-20.11545259430846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1697802978643!5m2!1spt-BR!2sbr";
    const urlWazer = "https://www.waze.com/pt-BR/live-map/directions/br/es/rua-angelim-da-mata?navigate=yes&to=place.EkNSLiBBbmdlbGltIGRhIE1hdGEgLSBDZW50cm8gZGEgU2VycmEsIFNlcnJhIC0gRVMsIDI5MTc5LTI1NCwgQnJhemlsIi4qLAoUChIJh_wCF0X1twARjAstOVur1qQSFAoSCRkgHRRo9bcAEWVzQ0bxvhDf";
    const urlGoogle = "https://www.google.com/maps/@-20.115453,-40.296014,17z?hl=pt-BR&entry=ttu"

  return (

    <BrowserRouter>
    <ScrollToTop />
      
      <Header urlIframe={urlIframe} urlWazer={urlWazer} urlGoogle={urlGoogle}/>

      <Routes>
        <Route path='/' element={<PageHome />}/>
        <Route path='/servicos' element={<PageServicos />}/>
        <Route path='/sobre' element={<PageSobre />}/>
        <Route path='/contatos' element={<PageContatos />}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
      
      <Footer urlIframe={urlIframe} urlWazer={urlWazer} urlGoogle={urlGoogle} />

      </BrowserRouter>
    
  );
}

export default RoutersApp;
