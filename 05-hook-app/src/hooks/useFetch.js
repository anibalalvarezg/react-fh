import { useEffect, useState } from "react"

export const useFetch = ( url ) => {
    const [state, setstate] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        setstate({ data: null, loading: true, error: null })
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setstate({
                    data,
                    error: null,
                    loading: false,
                });
            })
    }, [url]);

    return state;
}
