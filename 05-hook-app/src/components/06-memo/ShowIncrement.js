import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {

    console.log('Generate');

    return (
        <button className="btn btn-primary" onClick={ () => increment(1) }>
            Increment
        </button>
    )
});
