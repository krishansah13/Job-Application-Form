import { useState, useEffect } from "react";

const useDebounce = (value, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(()=> {
        const debounce = setTimeout(()=> {
            setDebouncedValue(value)
        },delay);
        return ()=> clearTimeout(debounce);
    },[value, delay]);

    return debouncedValue
};

export default useDebounce;