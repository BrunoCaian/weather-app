import styled from "styled-components";

// export const Container = styled.div`
//     width: 100vw;
// `

export const SectionStyles = styled.section`
    
    color: #fff;
    backdrop-filter: blur(10px);
    padding: 15px;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;

    @media (max-width: 500px) {
        border-radius: 0px;
    }
`

export const TemperatureNow = styled(SectionStyles)`
   background: linear-gradient(135deg, #1e3c72, #2a5298);
    width: 50%;
   

    @media (max-width: 900px) {
        width: 98%;
        margin: auto;
        margin-bottom: 2rem;
    }

    @media (max-width: 500px) {
        width: 100%;
        margin-bottom: 0px;
        height: 100vh;
    }


`

export const TempDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


    span {
        font-size: 3rem;
        font-weight: bold;
        margin-top: 10px;
    }

    sup {
        font-size: 2rem;
    }

    div {
        display: flex;
    }

    @media (max-width: 500px) {
        
        span {
            font-size: 5rem;
            margin-top: 2rem;
        }

        sup {
            font-size: 2.5rem;
        }
    }
`
export const SmallIcon = styled.img`
    margin-left: -6px;
    margin-right: 5px;
    width: 40px;
    height: 40px;
    margin-left: 5px;
`

export const ClimateDescription = styled.div`
    display: flex;
    margin-bottom: 10px;
    align-items: center;
    border-bottom: 1.5px  solid rgba(255, 255, 255, 0.09);
    width: 100%;

    @media (max-width: 500px) {
        margin-top: 2rem;
        margin-bottom: 3rem;
    }

`

export const LocationCity = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;

    div {
        display: flex;
        gap: 5px;
    }

    span {
        font-size: 1rem;
        margin-top: -15px;
    }

    p {
        font-size: 1rem;
        margin-top: -15px;
        font-weight: bold;
    }
    
    @media (max-width: 500px) {
        margin-bottom: 5rem;

        span {
            font-size: 1.2rem;
        }

        p {
            font-size: 1.2rem;
        }
    }

    @media (max-width: 320px) {
        margin-bottom: 3rem;
    }
    `

export const OtherStatistcs =  styled.div`
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    margin-left: 5px;
    margin-right: 5px;
    padding: 8px;
    width: 120px;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h4 {
        font-size: 1rem;
    }

    p {
        font-size: 1rem;
    }

    sup {
        font-size: 0.8rem;
    }

    @media (max-width: 500px) {
        align-items: normal;
        width: 110px;
        height: 100px;
    }

    @media (max-width: 320px) {
        width: 95px;
    }
`
export const TodayHighlights = styled(SectionStyles)`
    background: linear-gradient(145deg, #4b6cb7, #182848);
    width: 100%;
    align-items: center;
    background-color: #6D67D0;

    @media (max-width: 900px) {
        width: 98%;
        margin: auto;
        margin-bottom: 2rem;
    }

    @media (max-width: 500px) {
        width: 100%;
        margin-bottom: 0px;
    }

`

export const HighlightsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 90%;
    gap: 12px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const BigCard = styled.div`
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    height: 200px;
    align-items: center;
    flex-direction: column;
    border-radius: 12px;
    padding: 3px;
    margin-top: 2rem;
    
    p {
        font-size: 1rem;
        font-weight: 700;
    }

    transition: transform 0.3s ease;

    &:hover {
    transform: scale(1.02);
    }

`
export const SmallCard = styled(BigCard)`
    height: 100px;

    div {
        display: flex;
        margin-top: 5px;
        justify-content: center;

        span {
            font-weight: bold;
        }
    }
`



export const WindStatus = styled(BigCard)`
    p {
        margin-top: -3.5rem;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    
        span {
            font-size: 3rem;
            font-weight: bold;

            span {
                font-size: 1rem;
            }
        }
    }


`

export const Humidity = styled(SmallCard)`
    font-size: 2.5rem;

    div {
        gap: 15px;

        span {
            font-size: 3rem;

            span {
                font-size: 2rem;
            }
        }


    }
    
`

export const Visibility = styled(SmallCard)`
    font-size: 2.5rem;
    
    div {
        gap: 15px;

        span {
            font-size: 3rem;

            span {
                font-size: 1rem;
            }
        }
    }

`

export const FeelsLike = styled(SmallCard)`
    font-size: 3rem;

    sup {
        font-size: 1.5rem;
    }
`
