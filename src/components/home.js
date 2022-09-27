import React from 'react';

import Form from './form';

//iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faScaleBalanced,
  faScroll, 
  faChalkboardUser,
  faClock,
  faBuilding
} from '@fortawesome/free-solid-svg-icons';

//imagenes
import whatsapp from "../assets/whatsapp.png"
import staff from "../assets/staff.png"
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
              <button className="boton">
                <a href='#formulario'>Contactanos</a>
              </button>
            </div>
          </div>
        </div>
        <div className='whatsapp-icon'>
            <img src={whatsapp} alt="whatsapp-logo" onClick={redirectWhatsApp} /> 
        </div>
        <div className='info-cartas' id='servicios'>
          <section>
            <FontAwesomeIcon icon={ faScroll } />
            <h2>AREA DE LIGITACIÓN PROCESAL</h2>
            <p>
              Somos especialistas en la elaboraión de estrategias en procesos judiciales con respuestas sobre derechos Civil
              (contractuales, familia, sucesiones, etc), penal, laboral, comercial, tributario, administracion pública y 
              ademas de garantías constitucionales.
            </p>
          </section>
          <section>
            <FontAwesomeIcon icon={ faChalkboardUser } />
            <h2>ASESORIÍA EMPRESARIAL CORPORATIVA</h2>
            <p>
              Nuestros servicios comprenden la asesoría (mensual); y, el acompañamiento legal integral que incluye todas las 
              ramas del derecho que nuestra firma maneja; inclusive, la revisión de documentos (legales, contractuales y/o administrativos),
              Asimismos, nuestra asesoría legal dispondrá de un énfasis especial en cuanto al Derecho Laboral y/o Contractual, con la 
              finalidad de proteger la empresa y sus ejecutivos; y, evitar circunstancias que podrían pcasionar eventuales litigios
              laborales, comerciales y/o contractuales; y, de otras indoles.
            </p>
          </section>
          <section>
            <FontAwesomeIcon icon={ faBuilding } />
            <h2>DUE DILEGENCE Y OFICIAL DE CUMPLIMIENTO</h2>
            <p>
              Nuestra asesoría se enfoca en la prevención de riesgos penales; y, de la responsabilidad administrativa de las personas jurídicas 
              (incluyendo a sus directivos)-COMPLIANCE, derecho penal económico o penal corporativo, delitos ambientales, delitos contra la
              administración pública (corrupción de funcionarios).
            </p>
          </section>
          <section>
            <FontAwesomeIcon icon={ faScaleBalanced } />
            <h2>UTERO SUBROGADO</h2>
            <p>
              Asesoramos y acompañamos a nuestros clientes en este complejo proceso legal para lograr que la madre (quien tiene la voluntad 
              procreacional) ser reconocida como la madre legal del menor nacido vivo. Práctica que no está regulada, pero tampoco prohibida en 
              nuestro país.
            </p>
          </section>
        </div>
        <main className='main-wrapper' id='staff'>
          <div className='main-content' >
            <h1>
              Quienes Somos
            </h1>
            <h3>Estudios Miranda & Abogados</h3>
        	  <p>
              Es una firma Jurídica que cuenta con un equipo de letrados prefesionales con experiencia en ligitación procesal con énfasis en
              el Derecho Procesal (Penal, Civil, Laboral entre otros), Derecho Constitucional, Contrataciones con el Estado, Derecho 
              Corporativo y Societario, Derecho Administrativo & Derecho Aduanero.
            </p>
            <button>
            Contactanos
            </button>
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
              <img src={alianzaA} alt="alianza-a" />
              <p>
                CENTRO DE CONCILIAIÓN "DIALOGUS PER CONVENTIONEM"
              </p>
            </section>
            <section onClick={redirectAlianzaB}>
                <img src={alianzaB} alt="alianza-b" />
                <p>
                  ASOCIACIÓN DE INVESTIGACIÓN, DEFENSA Y PROTECCIÓN LEGAL - PROYECTO DEFIENDE
                </p>
            </section>
            <section onClick={redirectAlianzaC}>
              <img src={alianzaC} alt="alianza-c" />
              <p>
                AC. AUDITORIA & CONTABILIDAD
              </p>
            </section>

          </div>
        </div>
        <Form />
    </div>
  );
};

export default Home;