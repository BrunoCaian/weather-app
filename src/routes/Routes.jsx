import { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import {
  fetchWeatherData,
  fetchForecastData,
  fetchAirQualityData,
  fetchCoordinates,
} from "../api";
import Home from "../pages/Home";
import WeatherPage from "../pages/Weather";
import { AlertCircle } from "lucide-react";
import {
  BackButton,
  ErrorContainer,
  ErrorMessage,
  ErrorTitle,
} from "./styles/ErrorMessage";
import { LoadingContainer } from "./styles/Loading";
import loadingGif from "../assets/loading.gif";

function WeatherRoute({ apiKey }) {
  const { city } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    weather: null,
    aqiGauge: null,
    forecast: [],
    cityInfo: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      if (!city) {
        setError("Cidade não fornecida.");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const coords = await fetchCoordinates(apiKey, city);
        if (!coords) throw new Error("Cidade não encontrada");

        const cityInfo = {
          name: coords.name,
          state: coords.state,
          country: coords.country,
        };

        const [weatherData, forecastData, aqi] = await Promise.all([
          fetchWeatherData(apiKey, coords.lat, coords.lon),
          fetchForecastData(apiKey, coords.lat, coords.lon),
          fetchAirQualityData(apiKey, coords.lat, coords.lon),
        ]);

        setData({
          weather: weatherData,
          forecast:
            forecastData?.filter((item) =>
              item.dt_txt.includes("12:00:00")
            ) || [],
          aqiGauge: aqi,
          cityInfo,
        });
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
        setError(err.message || "Erro ao buscar os dados do clima");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city, apiKey]);

  if (loading) {
    return (
      <LoadingContainer>
        <img src={loadingGif} alt="Carregando..." />
      </LoadingContainer>
    );
  }

  if (error) {
    return (
      <ErrorContainer>
        <AlertCircle size={48} />
        <ErrorTitle>Ops! Algo deu errado</ErrorTitle>
        <ErrorMessage>{error}</ErrorMessage>
        <BackButton
          onClick={() => {
            setError(null);
            navigate("/");
          }}
        >
          Voltar para o início
        </BackButton>
      </ErrorContainer>
    );
  }

  if (!data.weather || !data.cityInfo) {
    return (
      <ErrorContainer>
        <AlertCircle size={48} />
        <ErrorTitle>Dados insuficientes</ErrorTitle>
        <ErrorMessage>
          Não foi possível carregar as informações da cidade.
        </ErrorMessage>
        <BackButton onClick={() => navigate("/")}>
          Voltar para o início
        </BackButton>
      </ErrorContainer>
    );
  }

  return (
    <WeatherPage
      data={data.weather}
      forecast={data.forecast}
      aqiGauge={data.aqiGauge}
      cityInfo={data.cityInfo}
    />
  );
}

export default function RoutesComponent({ apiKey }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/weather/:city" element={<WeatherRoute apiKey={apiKey} />} />
    </Routes>
  );
}
