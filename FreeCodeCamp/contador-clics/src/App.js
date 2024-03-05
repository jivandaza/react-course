import Button from './components/Button.js';
import Counter from './components/Counter.js';
import { useState } from 'react';
import './App.css';

function App() {

    const [ count, setCounter ] = useState(0);

    const increase = () => {
        setCounter(count + 1);
    }

    const reset = () => {
        setCounter(0);
    }

    const decrease = () => {
        if (count !== 0) {
            setCounter(count - 1);
        }
    }

    return (
        <div className='App'>
            <div className='parent-container'>
                <Counter
                    count={count}
                />
                <Button
                    text='+'
                    classButton='button-increase'
                    btnClic={increase}
                />
                <Button
                    text='-'
                    classButton='button-decrease'
                    btnClic={decrease}
                />
                <Button
                    text='Reset'
                    classButton='button-reset'
                    btnClic={reset}
                />
            </div>
        </div>
    );
}

export default App;
