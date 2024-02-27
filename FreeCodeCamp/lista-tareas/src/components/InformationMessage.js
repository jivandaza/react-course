import './../css/information-message.css';
import React from 'react';

function InformationMessage ({ msg }) {
    return(
        <div className='information-message-content'>
            <p className='information-message-text'>{msg}</p>
        </div>
    );
}

export default InformationMessage;