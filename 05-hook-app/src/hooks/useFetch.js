import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {

    const isMounted = useRef(true);
    const [state, setstate] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, [])

    useEffect(() => {
        setstate({ data: null, loading: true, error: null })
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (isMounted.current) { 
                    setstate({
                        data,
                        error: null,
                        loading: false,
                    });
                } else {
                    console.log('Set state doesn\'t call');
                }
            });
    }, [url]);

    return state;
}
