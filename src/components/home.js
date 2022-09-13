import React from 'react';

import Form from './form';

//iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faScaleBalanced,
  faScroll, 
  faChalkboardUser,
  faClock,
  faHandshake
} from '@fortawesome/free-solid-svg-icons';

//imagenes
import whatsapp from "../assets/whatsapp.png"
import staff from "../assets/staff.png"

const Home = () => {

  const redirectWhatsApp = () => {
    window.open('https://wa.link/ihwcn5')
  }

  return (
    <div className='home-wrapper' >
        <div className='banner-container' id='inicio' >
          <div className='banner-content'>
            <h1 className='ayuda'>¿Necesitas <span>Ayuda?</span></h1>
            <h1 className='nosotros'>Nosotros defendemos <span>tus derechos</span></h1>
            <button className="boton">
              Contactanos
            </button>
          </div>
        </div>
        <div className='whatsapp-icon'>
            <img src={whatsapp} alt="whatsapp-logo" onClick={redirectWhatsApp} /> 
        </div>
        <div className='info-cartas' id='servicios'>
          <section>
            <FontAwesomeIcon icon={ faScroll } />
            <h2>Conciliacion</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non!
            </p>
          </section>
          <section>
            <FontAwesomeIcon icon={ faScaleBalanced } />
            <h2>Procesos Penales</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non!
            </p>
          </section>
          <section>
            <FontAwesomeIcon icon={ faChalkboardUser } />
            <h2>Asesoria</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non!
            </p>
          </section>
        </div>
        <main className='main-wrapper' id='staff'>
          <div className='main-content' >
            <h1>
              El mejor Staff de Abogados
            </h1>
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit.</h3>
        	  <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quaerat magni laboriosam numquam blanditiis architecto incidunt soluta, doloribus libero est. Deleniti rerum delectus corporis! Ea, nihil. Modi, laborum quibusdam numquam nihil consequatur expedita harum optio obcaecati tempora rerum repellendus nulla natus iusto nisi porro aliquam consequuntur a, amet quae itaque! Nobis laboriosam quos velit quia beatae molestiae officiis alias.
            </p>
            <button>
              Contactanos
            </button>
          </div>
          <div className='staff-photo'>
            <img src={staff} alt="staff-picture" />
          </div>
        </main>
        <div className='beneficios-sections'>

          <h2>
            Beneficios
          </h2>

          <div className='beneficios-grid'>
            <section>
              <FontAwesomeIcon icon={faClock} />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati deserunt libero quisquam impedit, vel eveniet! Harum.
              </p>
            </section>
            <section>
              <FontAwesomeIcon icon={faHandshake} />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati deserunt libero quisquam impedit, vel eveniet! Harum.
                </p>
            </section>
            <section>
              <FontAwesomeIcon icon={faScroll} />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati deserunt libero quisquam impedit, vel eveniet! Harum.
              </p>
            </section>
            <section>
              <FontAwesomeIcon icon={faScaleBalanced} />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati deserunt libero quisquam impedit, vel eveniet! Harum.
              </p>
            </section>
          </div>
        </div>
        <Form />
    </div>
  );
};

export default Home;