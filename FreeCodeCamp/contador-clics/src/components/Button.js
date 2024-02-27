import React from 'react';
import './../css/Button.css';

function Button({ text, classButton, btnClic }) {
    return(
        <button
            className={classButton}
            onClick={btnClic}
        >
            {text}
        </button>
    );
}

export default Button;