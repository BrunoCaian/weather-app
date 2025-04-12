import { useSearch } from "../../hooks/useSearch";
import { FaSearch } from "react-icons/fa";
import { HomeContainer, SearchForm } from "./styles";
import { SearchInput } from "./styles";
import { SearchButton } from "./styles";

export default function Home() {
  const { city, setCity, handleSearch } = useSearch();
  
  return (
    <HomeContainer>
      <h1>Buscar cidade</h1>
      <SearchForm onSubmit={handleSearch}>
        <SearchInput 
          type="text"
          placeholder="Digite o nome da cidade"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <SearchButton type="submit"><FaSearch /></SearchButton>
      </SearchForm>
    </HomeContainer>
  );
}
