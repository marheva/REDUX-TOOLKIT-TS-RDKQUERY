import { useState, useEffect } from 'react';

export default function useDebounce(value: string, delay: number = 300): string {
    const [debounced, setDebounced] = useState<string>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounced((prevValue) => (prevValue === value ? prevValue : value));
        }, delay);
        return () => clearTimeout(handler);
    }, [value, delay]);

    return debounced;
}
