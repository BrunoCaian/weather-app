import Forecast from "../../components/Forecast";
import WeatherCurrent from "../../components/WeatherCurrent";
import { BottomSection, TopSection, WeatherContainer } from "./styles";

export default function WeatherPage({ data, forecast, aqiGauge, cityInfo }) {
  if (!data || !cityInfo) {
    return <p>Dados insuficientes para mostrar o clima.</p>;
  }

  return (
    <WeatherContainer>
      <TopSection>
        <WeatherCurrent
          data={data}
          aqi={aqiGauge?.list?.[0]?.main?.aqi}
          forecast={forecast}
          cityInfo={cityInfo}
        />
      </TopSection>

      <BottomSection>
        <Forecast forecast={forecast} />
      </BottomSection>
    </WeatherContainer>
  );
}
