import React from 'react';

import Form from './form';

//iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faScaleBalanced,
  faScroll, 
  faChalkboardUser,
  faBuilding
} from '@fortawesome/free-solid-svg-icons';

//imagenes
import whatsapp from "../assets/whatsapp.png"
import staff from "../assets/quiene-somos.jpg"
import alianzaA from "../assets/alianza-a.png"
import alianzaB from "../assets/alianza-b.png"
import alianzaC from "../assets/alianza-c.png"


const Home = () => {

  const redirectWhatsApp = () => {
    window.open('https://wa.link/ihwcn5')
  }

  const redirectAlianzaA = () => {
    window.open('https://www.facebook.com/DialogusPerConventionem')
  };

  const redirectAlianzaB = () => {
    window.open('https://www.facebook.com/ProyectoDefiende')
  };

  const redirectAlianzaC = () => {
    window.open('https://www.estudiocontableac.com.pe/')
  };

  return (
    <div className='home-wrapper' >
        <div className='background-banner'>
          <div className='banner-container' id='inicio' >
            <div className='banner-content'>
              <h1 className='ayuda'>La defensa de la persona humana y el respeto de su dignidad <span>son el fin supremo de la sociedad y del Estado</span></h1>
              <h2 className='nosotros'>(Artículo 1° Constitución Política del <span>Perú)</span></h2>
              <a href='#formulario' id='servicios' >Contáctanos</a>              
            </div>
          </div>
        </div>
        <div className='whatsapp-icon'>
            <img src={whatsapp} alt="whatsapp-logo" onClick={redirectWhatsApp} /> 
        </div>
        <div className='info-cartas' >
          <section>
            <FontAwesomeIcon icon={ faScroll } />
            <h2>ÁREA DE LITIGACIÓN PROCESAL</h2>
            <p>
              Somos especialistas en la elaboración de estrategias en procesos judiciales con disputas sobre derecho civil (contractuales, familia, sucesiones, etc.), penal, laboral, comercial, tributario, administración pública; y, además, de garantías constitucionales.
            </p>
          </section>
          <section>
            <FontAwesomeIcon icon={ faChalkboardUser } />
            <h2>ASESORÍA EMPRESARIAL CORPORATIVA</h2>
            <p>
            Acompañamiento legal integral (todas las ramas del derecho que nuestra firma maneja), revisión de documentos (legales, contractuales y/o administrativos), nuestra asesoría legal dispondrá de un énfasis especial en cuanto al Derecho Laboral y/o Contractual. 
            </p>
          </section>
          <section>
            <FontAwesomeIcon icon={ faBuilding } />
            <h2>DUE DILIGENCE Y OFICIAL DE CUMPLIMIENTO</h2>
            <p>
            Nuestra asesoría se enfoca en la prevención de riegos penales; y, de la responsabilidad administrativa de las personas jurídicas (incluyendo a sus directivos) – COMPLIANCE, derecho penal económico o penal corporativo, delitos ambientales, delitos contra la administración pública (corrupción de funcionarios).
            </p>
          </section>
          <section>
            <FontAwesomeIcon icon={ faScaleBalanced } />
            <h2>UTERO SUBROGADO<br/><span>x</span> </h2>
            <p>
            Asesoramos y acompañamos a nuestros clientes en este complejo proceso legal para 
            lograr que la madre (quien tiene la voluntad procreacional) sea reconocida como la madre legal del menor nacido vivo. Práctica que no está regulada, pero tampoco prohibida en nuestro país.
            </p>
          </section>
        </div>
        <div id='staff'></div>
        <main className='main-wrapper' >
          <div className='main-content' >
            <h1>
              Quienes Somos
            </h1>
            <h3>ESTUDIO MIRANDA RAMOS & ABOGADOS</h3>
        	  <p>
              Es una firma Jurídica que cuenta con un equipo de letrados profesionales con experiencia en ligitación procesal con énfasis en
              el Derecho Procesal (Penal, Civil, Laboral entre otros), Derecho Constitucional, Contrataciones con el Estado, Derecho 
              Corporativo y Societario, Derecho Administrativo & Derecho Aduanero.
            </p>
            
            <a href='#formulario'>Contáctanos</a>
            
          </div>
          <div className='staff-photo'>
            <img src={staff} alt="staff-picture" />
          </div>
        </main>
        <div className='alianzas-sections'>

          <h2>
            ALIANZAS ESTRATÉGICAS
          </h2>

          <div className='alianza-grid'>
            <section onClick={redirectAlianzaA}>
              <img className='alianzaA' src={alianzaA} alt="alianza-a" />
              <p>
                CENTRO DE CONCILIAIÓN EXTRAJUDICIAL "DIALOGUS PER CONVENTIONEM"<bt/>

              </p>
            </section>
            <section  onClick={redirectAlianzaB}>
                <img className='alianzaB' src={alianzaB} alt="alianza-b" />
                <p>
                  ASOCIACIÓN DE INVESTIGACIÓN, DEFENSA Y PROTECCIÓN LEGAL - PROYECTO DEFIENDE
                </p>
            </section>
            <section onClick={redirectAlianzaC}>
              <img className='alianzaC' src={alianzaC} alt="alianza-c" />
              <p>
                AC. AUDITORIA & CONTABILIDAD<br/>
                Asesoría empresarial contable & tributaria.
              </p>
            </section>
            <div id='formulario'> 
                {/* ancla para el enlace  */}
            </div>

          </div>
        </div>
        <Form />
    </div>
  );
};

export default Home;