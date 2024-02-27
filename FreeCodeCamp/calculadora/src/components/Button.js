import './../css/Button.css';
import React from 'react';

function Button({ children, btnClic }) {

    const isOperator = (value) => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    }

    return(
        <div
            className={`button-container ${isOperator(children) ? 'operator' : ''}`.trimEnd()}
            onClick={() => btnClic(children)}
        >
            {children}
        </div>
    );
}

export default Button;