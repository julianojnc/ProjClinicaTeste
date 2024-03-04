import './PageSobre.css'
import Clinica from 'assets/img/Frame 8.png';
import TimeLine from 'componentes/TimeLine';

const PageSobre = () => {
    return (
        <main>
            <section className='about-container'>
                <div className='about-container_img'>
                    <img src={Clinica} alt='imagem' />
                </div>

                <div className='about-container-content'>
                    <div className='content'>

                        <h3>Nossa História</h3>
                        <p>
                            Uma Década de Dedicação: A História de Nossa Clínica Veterinária<br /><br />

                            Há mais de 10 anos, nossa clínica veterinária abriu as portas com um propósito simples:<br />
                            cuidar dos animais com paixão e expertise. Desde então, enfrentamos desafios e crescemos, expandindo nossos serviços e construindo uma reputação de excelência. Com uma equipe dedicada e apaixonada, oferecemos cuidados excepcionais, desde consultas de rotina até cirurgias complexas. Ao longo dos anos, testemunhamos inúmeras histórias emocionantes, sempre com o bem-estar dos animais em primeiro lugar. Enquanto celebramos esta década de serviço, olhamos para o futuro com esperança e determinação, prontos para continuar nossa missão de amor e cuidado pelos animais.
                        </p>
                    </div>
                    <div className='content-time-line'>
                        <TimeLine />
                    </div>
                </div>

            </section>
        </main>
    )
}

export default PageSobre