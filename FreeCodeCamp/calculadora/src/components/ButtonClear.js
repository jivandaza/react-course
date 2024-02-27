import './../css/ButtonClear.css';
import React from 'react';

function ButtonClear({ children, clearScreen }) {
    return(
        <div
            className='button-clear'
            onClick={clearScreen}
        >
            {children}
        </div>
    );
}

export default ButtonClear;