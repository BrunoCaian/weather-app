import SearchSmall from "../SearchSmall"
import { TemperatureNow, TempDiv, LocationCity, SmallIcon, ClimateDescription, TodayHighlights, WindStatus, Humidity, Visibility, FeelsLike, HighlightsGrid, OtherStatistcs } from './styles'
import { FaLocationDot } from "react-icons/fa6";
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa'
import { BsCloudRainHeavyFill } from "react-icons/bs";
import { WiThermometer, WiHumidity } from 'react-icons/wi';
import { FaEye } from 'react-icons/fa';
import HumidityImg from '../../assets/humidity.svg'
import WindImg from '../../assets/Wind.svg'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import weatherAnimations from "../../weatherAnimations";
import AqiGauge from '../AqiGauge'
import SunriseAndSunset from "../SunriseAndSunset";


export default function WeatherCurrent({ data, aqi, forecast, cityInfo }) {

    if (!data || !data.main) {
        return (
            <p>Carregando dados do clima...</p>
        )
    }

    const iconCode = data.weather[0].icon
    const animationUrl = weatherAnimations[iconCode]
    const precipitationChance = forecast?.[0]?.pop;
    const sunrise = data.sys.sunrise * 1000
    const sunset = data.sys.sunset * 1000
    return (
        <>
            <TemperatureNow>
                <LocationCity>

                    <SearchSmall />

                    <div>
                        <span>{<FaLocationDot />}</span>
                        <p>{cityInfo?.name}, {cityInfo?.state || cityInfo?.country}</p>
                    </div>

                </LocationCity>


                {data.weather && data.weather.length > 0 && (
                    <TempDiv>

                        {animationUrl && (
                            <DotLottieReact
                                src={animationUrl}
                                loop
                                autoplay
                                style={{ width: '200px', marginTop: '-20px' }}
                            />
                        )}
                        <span>{(data.main.temp - 273.15).toFixed()}<sup>ºC</sup></span>

                        <ClimateDescription>
                            <SmallIcon src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="Ícone do clima" />
                            <p>{data.weather[0].description}</p>
                        </ClimateDescription>

                        <div>
                            <OtherStatistcs>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <FaTemperatureHigh style={{ width: '50px', height: '50px' }} />
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <h4>Máx</h4>
                                        <p>{(data.main.temp_max - 273.15).toFixed()}<sup>ºC</sup></p>
                                    </div>
                                </div>

                            </OtherStatistcs>

                            <OtherStatistcs>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <FaTemperatureLow style={{ width: '50px', height: '50px' }} />
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <h4>Min</h4>
                                        <p>{(data.main.temp_min - 273.15).toFixed()}<sup>ºC</sup></p>
                                    </div>
                                </div>
                            </OtherStatistcs>

                            {precipitationChance !== undefined && (
                                <OtherStatistcs>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <BsCloudRainHeavyFill style={{ width: '50px', height: '50px', color: '#ffffffaf'}} />
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <h4>Chuva</h4>
                                            <p>{(precipitationChance * 100).toFixed()}%</p>
                                        </div>
                                    </div>
                                </OtherStatistcs>
                            )}
                        </div>
                        
                    </TempDiv>
                )}
            </TemperatureNow>

            <TodayHighlights>
                <h3>Destaques de hoje</h3>

                <HighlightsGrid>

                    <WindStatus>
                        <p>Estado do Vento</p>
                        <div>
                            <img src={WindImg} alt="Vento" style={{ width: '100px', height: '100px' }} />
                            <span>{(data.wind.speed * 3.6).toFixed(1)}<span>km/h</span></span>
                        </div>

                    </WindStatus>
                    
                    <AqiGauge aqi={aqi} />

                    <SunriseAndSunset sunrise={sunrise} sunset={sunset}/>

                    <Humidity>
                        <p>Umidade</p>
                        <div>
                            <WiHumidity style={{ width: '60px', height: '60px' }} />
                            <span style={{marginLeft: '-15px'}}>{data.main.humidity}<span>%</span></span>
                        </div>
                    </Humidity>

                    <Visibility>
                        <p>Visibilidade</p>
                        <div>
                            <FaEye style={{ width: '50px', height: '50px' }} />
                            <span>{(data.visibility / 1000).toFixed(1)}<span>km</span></span>
                            
                        </div>
                    </Visibility>

                    <FeelsLike>
                        <p>Sensação</p>
                        <div>
                            <WiThermometer style={{ width: '60px', height: '60px' }} />
                            <span style={{marginLeft: '-10px'}}>{(data.main.feels_like - 273.15).toFixed()}<sup>ºC</sup></span>
                        </div>
                    </FeelsLike>

                </HighlightsGrid>

            </TodayHighlights>

        </>
    )
}