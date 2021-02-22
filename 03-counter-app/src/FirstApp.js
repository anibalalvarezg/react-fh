import React from 'react';
import PropTypes from 'prop-types';

const FristApp = ( { greetings } ) => {
    return (
        <>
            <h1> {greetings }</h1>
            <p>My first application</p>
        </>
    );
}

FristApp.propTypes = {
    greetings: PropTypes.string,
};

export default FristApp;