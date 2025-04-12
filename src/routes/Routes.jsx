import { useEffect, useState } from "react"
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { fetchWeatherData, fetchForecastData, fetchAirQualityData, fetchCoordinates } from "../api"
import Home from "../pages/Home"
import WeatherPage from "../pages/Weather"
import { AlertCircle } from "lucide-react"
import { BackButton, ErrorContainer, ErrorMessage, ErrorTitle } from "./styles/ErrorMessage"
import { LoadingContainer } from "./styles/Loading"
import loadingGif from '../assets/loading.gif'

export default function RoutesComponent({ apiKey }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState({
    weather: null,
    aqiGauge: null,
    forecast: [],
    cityInfo: null
  })

  const navigate = useNavigate()

  const location = useLocation()
  const cityParams = new URLSearchParams(location.search).get('city')

  useEffect(() => {
    const fetchData = async () => {
      if (!cityParams) return

      setLoading(true)
      setError(null)

      try {
        const coords = await fetchCoordinates(apiKey, cityParams)
        if (!coords) throw new Error("Cidade não encontrada")

        const cityInfo = {
          name: coords.name,
          state: coords.state,
          country: coords.country
        }

        const [weatherData, forecastData, aqi] = await Promise.all([
          fetchWeatherData(apiKey, coords.lat, coords.lon),
          fetchForecastData(apiKey, coords.lat, coords.lon),
          fetchAirQualityData(apiKey, coords.lat, coords.lon)
        ])

        setData({
          weather: weatherData,
          forecast: forecastData?.filter(item => item.dt_txt.includes('12:00:00')) || [],
          aqiGauge: aqi,
          cityInfo
        })
      } catch (err) {
        console.error(err)
        setError(err.message || "Erro ao buscar os dados do clima")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [cityParams, apiKey])


  if (loading) {
    return (
      <LoadingContainer>
        <img src={loadingGif} alt="" />
      </LoadingContainer>
    )
  }

  if (error) {
    return (
      <ErrorContainer>
        <AlertCircle size={48} />
        <ErrorTitle>Ops! Algo deu errado</ErrorTitle>
        <ErrorMessage>{error}</ErrorMessage>
        <BackButton onClick={() => {
          setError(null);
          navigate('/')
        }}>
          Voltar para o início
        </BackButton>
      </ErrorContainer>
    )
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {cityParams && !loading && !error && data.weather && (
        <Route
          path="/weather"
          element={
            <WeatherPage
              data={data.weather}
              forecast={data.forecast}
              aqiGauge={data.aqiGauge}
              cityInfo={data.cityInfo}
            />
          }
        />
      )}
    </Routes>
  )
}
