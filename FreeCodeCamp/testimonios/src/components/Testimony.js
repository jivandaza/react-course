import './../css/style.css';
import React from 'react';

function Testimony(props) {
    return (
        <div className='testimony-container'>
            <img
                className='image-testimony'
                src={require(`./../images/testimony-${props.image}.png`)}
                alt={`Foto de ${props.name}`}
            />
            <div className='testimony-text-container'>
                <p className='testimony-name'>
                    <strong>{props.name}</strong> en {props.country}
                </p>
                <p className='charge-testimony'>
                    {props.change} en <strong>{props.company}</strong>
                </p>
                <p className='text-testimony' dangerouslySetInnerHTML={{ __html: props.description }}/>
            </div>
        </div>
    );
}

export default Testimony;