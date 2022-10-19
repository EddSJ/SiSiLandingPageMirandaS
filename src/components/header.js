import React, { useState } from 'react';


//logo
import mirandaLogo from "../assets/miranda-logo.png"

//icon
import { AiOutlineBars } from "react-icons/ai";


const Header = () => {

  const [currentClass, setCurrentClass] = useState('nav-bar deactivate');

  const handleChangeClass = () => {
    if (currentClass === 'nav-bar deactivate'){
      setCurrentClass('nav-bar active');
    } else {
      setCurrentClass('nav-bar deactivate');
    }
  };

  return (
    <div className='header-wrapper'>
        <div className='logo-marca-wrapper'>
          <img src={mirandaLogo} alt="logo" />
        </div>
        <div className='responsive-nav-wrapper'>
          <AiOutlineBars onClick={handleChangeClass} />
          <div className={currentClass}>
                <a href='#inicio'>Inicio</a> 
                <a href='#staff'>Quienes somos</a>
                <a href='#servicios'>Nuestros servicios</a>
          </div>
        </div>
    </div>
  );
};

export default Header;