import React, { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/effects.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = useCallback( (inc) => {
        setCounter(c => c + inc)
    }, [ setCounter ]);

    useEffect(() => {
        // ???
    }, [setCounter]);

    return (
        <>
            <h1>useCalback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ increment } />
        </>
    )
}
