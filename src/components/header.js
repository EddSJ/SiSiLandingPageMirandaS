import React from 'react';


//logo
import mirandaLogo from "../assets/miranda-logo.png"


const Header = () => {


  

  return (
    <div className='header-wrapper'>
        <div className='logo-marca-wrapper'>
          <img src={mirandaLogo} alt="logo" />
        </div>
        <div>
          {/* <FaBars  />  */}
          <div className='nav-bar'>
              <a href='#inicio'>Inicio</a> 
              <a href='#staff'>Quienes somos</a>
              <a href='#servicios'>Nuestros servicios</a>
          </div>
        </div>
    </div>
  );
};

export default Header;