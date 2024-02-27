import './../css/Button.css';
import React from 'react';

class Button extends React.Component {
    render() {
        const { text, classButton, btnClic } = this.props;

        return(
            <button
                className={classButton}
                onClick={btnClic}
            >
                {text}
            </button>
        );
    }
}

export default Button;