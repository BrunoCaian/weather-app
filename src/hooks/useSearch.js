import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useSearch() {
    const [city, setCity] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (city.trim()) {
            navigate(`/weather/${city.toLowerCase()}`);
            setCity('');
        }
    };

    return { city, setCity, handleSearch };
}