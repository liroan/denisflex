import {useEffect, useState} from "react";


const useDebounce = (value: string, delay: number, action: (value: string, debounced: string) => void) => {
    const [debounced, setDebounced] = useState(value);
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounced(value)
            action(value, debounced)
        }, delay)
        return () => clearTimeout(timerId)
    }, [value, delay, action, debounced])
    return debounced;
}

export default useDebounce;