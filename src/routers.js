import Header from './componentes/Headear';
import Footer from './componentes/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageHome from 'paginas/Home';
import PageServicos from 'paginas/Servicos';
import PageSobre from 'paginas/Sobre';
import PageContatos from 'paginas/Contatos';
import ScrollToTop from 'componentes/ScrollToTop';

function RoutersApp() {
  return (

    <BrowserRouter>
    <ScrollToTop />
      
      <Header />

      <Routes>
        <Route path='/' element={<PageHome />}/>
        <Route path='/servicos' element={<PageServicos />}/>
        <Route path='/sobre' element={<PageSobre />}/>
        <Route path='/contatos' element={<PageContatos />}/>
        <Route path='*'/>
      </Routes>

      <Footer />

      </BrowserRouter>
    
  );
}

export default RoutersApp;
