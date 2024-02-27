import logoFreeCodeCamp from './images/freecodecamp-logo.png';
import Button from './components/Button.js';
import Screen from './components/Screen.js';
import ButtonClear from './components/ButtonClear.js';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

function App() {

    const [input, setInput] = useState('')

    const isOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    };

    const addInput = value => {
        const inputPush = isOperator(value) ? ' '+value+' ' : value;
        setInput(input + inputPush);
    };

    const calculateResult = () => {
        if ( !input ) {
            resultError('Input Empty');
        } else {
            try {
                const result = evaluate(input);
                if ( result === Infinity ) {
                    throw new Error();
                }
                if ( result % 1 !== 0 ) {
                    setInput(result.toFixed(4));
                } else {
                    setInput(result);
                }
            } catch (error) {
                resultError('Syntax Error');
            }
        }
    };

    const resultError = (msg) => {
        setInput(msg);
        setTimeout(() => {
            setInput('');
        }, 2000);
    };

    return (
        <div className='App'>
            <div className='freecodecamp-logo-container'>
                <img
                    src={logoFreeCodeCamp}
                    alt='Logo de FreeCodeCamp'
                    className='freecodecamp-logo'
                />
            </div>
            <div className='container-calculator'>
                <Screen
                    input = {input}
                />
                <div className='row'>
                    <Button btnClic={addInput}>1</Button>
                    <Button btnClic={addInput}>2</Button>
                    <Button btnClic={addInput}>3</Button>
                    <Button btnClic={addInput}>+</Button>
                </div>
                <div className='row'>
                    <Button btnClic={addInput}>4</Button>
                    <Button btnClic={addInput}>5</Button>
                    <Button btnClic={addInput}>6</Button>
                    <Button btnClic={addInput}>-</Button>
                </div>
                <div className='row'>
                    <Button btnClic={addInput}>7</Button>
                    <Button btnClic={addInput}>8</Button>
                    <Button btnClic={addInput}>9</Button>
                    <Button btnClic={addInput}>*</Button>
                </div>
                <div className='row'>
                    <Button btnClic={calculateResult}>=</Button>
                    <Button btnClic={addInput}>0</Button>
                    <Button btnClic={addInput}>.</Button>
                    <Button btnClic={addInput}>/</Button>
                </div>
                <div className='row'>
                    <ButtonClear clearScreen={() => setInput('')}>
                        Clear
                    </ButtonClear>
                </div>
            </div>
        </div>
    );
}

export default App;
