import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useSearch() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
        const citySlug = encodeURIComponent(city.trim().toLowerCase());
        console.log("Navigating to:", `/weather/${citySlug}`);
        navigate(`/weather/${citySlug}`);
        setCity(""); 
    }
};

  return { city, setCity, handleSearch };
}
