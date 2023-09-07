import { useState, useEffect } from 'react';
const useFetch = (url) => {
    // Declare state variables using the useState hook
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // Use the useEffect hook to fetch data and update the state
    useEffect(() => {
        const abortConst = new AbortController();
        // Simulate a delay of 1 second before fetching data
        setTimeout(() => {
            // Fetch data from the specified URL
            fetch(url, {signal: abortConst.signal})
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    // Update the courses state with the fetched data
                    setData(data);
                    // Set isPending to false to indicate that data has been fetched
                    setIsPending(false);
                    setError(null);
                }).catch(err => {
                    if (err.name === 'AbortError'){
                        console.log('Fetch Abort');
                    } else{
                        setIsPending(false);
                        setError(err.message);
                    }
                })
        }, 1000);
        return () => abortConst.abort();
    }, [url]);
    return {data, isPending, error};
}
export default useFetch;