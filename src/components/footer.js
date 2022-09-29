import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";

import React from 'react';

import logo from "../assets/miranda-logo.png"

const Footer = () => {

  const linkFacebook = () => {
    window.open('https://www.facebook.com/EstudioMirandaRamos')
  }

  const linkInstargam = () => {

  }

  const linkLinkedin = () => {

  }

  const linkSiSi = () => {
    window.open('https://www.facebook.com/sisiculturadigital/')
  } 

  return (
    <div >
    <footer className='footer-wrapper'>
        <div className='footer-grid'>
          <div className='left-row'>
            <img src={logo} alt="logo" />
            <div className='footer-links'>
              <a href='#inicio'>Inicio</a>
              <a href='#staff'>Quienes somos</a>
              <a href='#servicios'>Servicios</a>
            </div>
          </div>
          <div className='middle-row'>
            <h2>Contacto</h2>
            <p>•	Dirección: Jirón Francisco de Zela Nro. 1683 Oficina 301, Lince.</p>
            <p> <FontAwesomeIcon icon={faPhone} />:  +51 945449294</p>
            <p> <FontAwesomeIcon icon={faEnvelope} />: inbox@estudiomirandaramos.com</p>
          </div>
          <div className='right-row' id='redes'>
            <p><b>Siguenos</b></p>
            <FaFacebookSquare className='facebook' onClick={linkFacebook} />
            <FaTwitter className='twitter' />
            <FaLinkedin className='linkedin' />
          </div>
        </div>
    </footer>
      	<div className='created' onClick={linkSiSi}>
            <p>Developed By &#174; SiSi  Cultura digital</p> 
        </div>
    </div>
  );
};

export default Footer;  