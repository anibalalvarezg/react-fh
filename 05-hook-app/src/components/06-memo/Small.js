import React from 'react';

export const Small = React.memo(({ value }) => {

    console.log('Called');

    return (
        <small>
            { value }
        </small>
    )
});
