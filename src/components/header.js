import React from 'react';
import { Link } from 'react-router-dom';

//logo
import mirandaLogo from "../assets/miranda-logo.png"


const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className='logo-marca-wrapper'>
          <img src={mirandaLogo} alt="logo" />
        </div>
        <div className='nav-bar'>
            <a href='#inicio'>Inicio</a> 
            <a href='#staff'>Quienes somos</a>
            <a href='#redes'>Nuestros servicios</a>
        </div>
    </div>
  );
};

export default Header;