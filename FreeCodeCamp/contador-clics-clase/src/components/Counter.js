import './../css/Counter.css';
import React from 'react';

class Counter extends React.Component {
    render() {
        const {count} = this.props;

        return (
            <div className='counter'>
                {count}
            </div>
        );
    }
}

export default Counter;