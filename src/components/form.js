import React, { useState } from 'react';
import { send } from 'emailjs-com';

import map from '../assets/map.png'

const Form = () => {

    const [nombreValor, setNomreValor] = useState('');
    const [emailValor, setEmailValor] = useState('');
    const [asuntoValor, setAsuntoValor] = useState('');

    const handleChangeNombre = (event) => {
        setNomreValor(event.target.value);
    };

    const handleChangeEmail = (event) => {
        setEmailValor(event.target.value);
    };

    const handleChangeAsunto = (event) => {
        setAsuntoValor(event.target.value);
    }

    const sendEmail = (event) => {
        event.preventDefault();
        
        let resultado = send("service_tucb7yr","template_4g5lfs9",{
            nombre: nombreValor,
            email: emailValor,
            asunto: asuntoValor,
        }, 'iTtwsYmkhrDcSkaWw');

        if(resultado) {
            alert('Correo enviado exitosamente, Nos contactaremos contigo pronto.')

            setNomreValor('');
            setEmailValor('');
            setAsuntoValor('');
        }
    }

    const redirectGoogleMap = () => {
        window.open('https://www.google.com/maps/place/Oficina+301,+Jir%C3%B3n+Francisco+de+Zela+1683,+Lince+15073,+Per%C3%BA/@-12.081985,-77.0405831,19z/data=!3m1!4b1!4m5!3m4!1s0x9105c8f6971a200b:0x40eb97de80a9806b!8m2!3d-12.0819863!4d-77.0400359')
    };

  return (
    <div className='form-map-wrapper' id='formulario'>
        <div className="form-map-grid">
            <form onSubmit={sendEmail}>
                <h1>Contacta con un especialista</h1>
                <p>Te asesoramos y defendemos tus derechos</p>

                <label><h1>Nombre</h1></label>
                <input type="text" id='nombre' name='nombre' value={nombreValor} onChange={handleChangeNombre} required />

                <label><h1>Email</h1></label>
                <input type="email" id="email" name="email" value={emailValor} onChange={handleChangeEmail}  required/>

                <label><h1>Asunto</h1></label>
                <textarea id='asunto' name='asunto' value={asuntoValor} onChange={handleChangeAsunto} required/>

                <div className='btn-container'>
                    <button type='submit'>Enviar</button>   
                </div>
            </form>
            <div className='map'>
                <img src={map} alt='map-img' />
                <h3 onClick={redirectGoogleMap}>
                    Abre este mapa en la app
                </h3>
            </div>
        </div>
    </div>
  );
};

export default Form;