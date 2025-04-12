import { Day, Days, FiveDaysForecast, OtherStatistcs, SlideContent, Statistc } from "./styles";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import weatherAnimations from "../../weatherAnimations";
import WindImg from '../../assets/Wind.svg'
import { BsCloudRainHeavyFill } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import useMobile from '../../hooks/useIsMobile'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Forecast({ forecast }) {
    const isMobile = useMobile()

    return (
        <FiveDaysForecast>
            <h3>Previsão para os próximos 5 dias</h3>
            {isMobile ? (
                <Swiper slidesPerView={1} spaceBetween={24} pagination={{ clickable: true}} navigation style={{width: '100%', maxWidth: '400px', paddingBottom:'8rem', paddingTop: '8rem'}}>
                    {forecast.map((day, index) => {
                        const iconCode = day.weather[0].icon
                        const animationUrl = weatherAnimations[iconCode]

                        return (
                            <SwiperSlide key={index}>
                                <SlideContent>
                                <Day key={index}>
                                    <h4>{new Date(day.dt * 1000).toLocaleDateString("pt-BR", { weekday: "long" })}</h4>
                                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginBottom: '1rem' }}>
                                        {animationUrl && (
                                            <DotLottieReact
                                                src={animationUrl}
                                                loop
                                                autoplay
                                                style={{ width: '100px', height: '100px', marginTop: '1rem' }}
                                            />
                                        )}
                                        <span>{Math.round(day.main.temp - 273.15)}<sup>°C</sup></span>
                                        <p>{day.weather[0].description}</p>
                                    </div>
                                    <OtherStatistcs>
                                        <Statistc>
                                            <WiHumidity style={{ width: '34px', height: '34px' }} />
                                            <span style={{ marginLeft: '-6px' }}>{day.main.humidity}<span style={{ fontSize: '12px' }}>%</span></span>
                                        </Statistc>
                                        <Statistc>
                                            <img src={WindImg} alt="Ícone de vento" />
                                            <span>{Math.round(day.wind.speed)}<span style={{ fontSize: '12px' }}>km/h</span></span>
                                        </Statistc>
                                        <Statistc>
                                            <BsCloudRainHeavyFill style={{ width: '28px', height: '28px' }} />
                                            <span>{Math.round(day.pop * 100)}<span style={{ fontSize: '12px' }}>%</span></span>
                                        </Statistc>
                                    </OtherStatistcs>
                                </Day>
                                </SlideContent>
                            </SwiperSlide>

                        )

                    })}
                </Swiper>
            ) : (
                <Days>
                    {forecast.map((day, index) => {
                        const iconCode = day.weather[0].icon
                        const animationUrl = weatherAnimations[iconCode]

                        return (
                            <Day key={index}>
                                <h4>{new Date(day.dt * 1000).toLocaleDateString("pt-BR", { weekday: "long" })}</h4>
                                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginBottom: '1rem' }}>
                                    {animationUrl && (
                                        <DotLottieReact
                                            src={animationUrl}
                                            loop
                                            autoplay
                                            style={{ width: '100px', height: '100px', marginTop: '10px' }}
                                        />
                                    )}
                                    <span>{Math.round(day.main.temp - 273.15)}<sup>°C</sup></span>
                                    <p>{day.weather[0].description}</p>
                                </div>
                                <OtherStatistcs>
                                    <Statistc>
                                        <WiHumidity style={{ width: '34px', height: '34px' }} />
                                        <span style={{ marginLeft: '-6px' }}>{day.main.humidity}<span style={{ fontSize: '12px' }}>%</span></span>
                                    </Statistc>
                                    <Statistc>
                                        <img src={WindImg} alt="Ícone de vento" />
                                        <span>{Math.round(day.wind.speed)}<span style={{ fontSize: '12px' }}>km/h</span></span>
                                    </Statistc>
                                    <Statistc>
                                        <BsCloudRainHeavyFill style={{ width: '28px', height: '28px' }} />
                                        <span>{Math.round(day.pop * 100)}<span style={{ fontSize: '12px' }}>%</span></span>
                                    </Statistc>
                                </OtherStatistcs>
                            </Day>
                        )
                    })}
                </Days>
            )}


        </FiveDaysForecast>
    )
}