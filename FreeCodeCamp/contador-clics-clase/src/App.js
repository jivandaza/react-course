import './App.css';
import logoFreeCodeCamp from './images/freecodecamp-logo.png';
import Counter from './components/Counter.js';
import Button from './components/Button.js';
import React from 'react';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 0
        }
    }

    increase = () => {
        this.setState(({ count }) => ({ count: count + 1 }));
    }

    reset = () => {
        this.setState(() => ({count: 0}));
    }

    decrease = () => {
        if (this.state.count !== 0) {
            this.setState(({ count }) => ({ count: count - 1 }));
        }
    }

    render() {

        const { count } = this.state;

        return (
            <div className="App">
                <div className='freecodecamp-logo-container'>
                    <img
                        src={logoFreeCodeCamp}
                        alt='Logo de FreeCodeCamp'
                        className='freecodecamp-logo'
                    />
                </div>
                <div className='parent-container'>
                    <Counter
                        count={count}
                    />
                    <Button
                        text='+'
                        classButton='button-increase'
                        btnClic={this.increase}
                    />
                    <Button
                        text='-'
                        classButton='button-decrease'
                        btnClic={this.decrease}
                    />
                    <Button
                        text='Reset'
                        classButton='button-reset'
                        btnClic={this.reset}
                    />
                </div>
            </div>
        );
    }
}

export default App;
