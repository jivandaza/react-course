import logoFreeCodeCamp from './../images/freecodecamp-logo.png';
import './../css/logo.css';
import React from 'react';

function Logo() {
    return(
        <div className='freecodecamp-logo-container'>
            <img
                src={logoFreeCodeCamp}
                alt='Logo de FreeCodeCamp'
                className='freecodecamp-logo'
            />
        </div>
    );
}

export default Logo;