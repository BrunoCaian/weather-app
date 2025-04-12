import { SearchButton, SearchForm, SearchInput } from "./styles";
import { useSearch } from "../../hooks/useSearch";
import { FaSearch } from "react-icons/fa";

export default function SearchSmall() {
    const { city, setCity, handleSearch } = useSearch()
    return (
        <>
            <SearchForm onSubmit={handleSearch} >
                <SearchInput
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Buscar..."
                />
                <SearchButton type="submit"><FaSearch/></SearchButton>
            </SearchForm>
        </>
    )
}