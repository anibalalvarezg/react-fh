import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { value } ) => {
    const [counter, setCounter] = useState(value ? value : 0);

    const handleAdd = () => setCounter(counter + 1);
    const handleSubtract = () => setCounter(counter - 1);
    const handleReset = () => setCounter(0);

    return (
        <>
            <h1> Counter App </h1>
            <p> { counter } </p>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleSubtract }>-1</button>
            <button onClick={ handleReset }>Reset</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number,
};

CounterApp.defaultProps = {
    value: 0,
};

export default CounterApp;