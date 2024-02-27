import './../css/style.css';
import React from 'react';

class Testimony extends React.Component {
    render() {

        const { image, name, country, change, company, description } = this.props;

        console.log(image, name, country, change, company, description);

        return (
            <div className='testimony-container'>
                <img
                    className='image-testimony'
                    src={require(`./../images/testimony-${this.props.image}.png`)}
                    alt={`Foto de ${this.props.name}`}
                />
                <div className='testimony-text-container'>
                    <p className='testimony-name'>
                        <strong>{this.props.name}</strong> en {this.props.country}
                    </p>
                    <p className='charge-testimony'>
                        {this.props.change} en <strong>{this.props.company}</strong>
                    </p>
                    <p className='text-testimony' dangerouslySetInnerHTML={{ __html: this.props.description }}/>
                </div>
            </div>
        );
    }
}

export default Testimony;