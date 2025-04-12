import styled from "styled-components"
import { SectionStyles } from "../WeatherCurrent/styles"

export const FiveDaysForecast = styled(SectionStyles)`
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: linear-gradient(135deg, #2a5298, #1e3c72);

    
    h3 {
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 1rem;
        
    }
    
    @media (max-width: 900px) {
        width: 98%;
        margin: auto;
    }

    @media (max-width: 500px) {
        height: 100vh;
        width: 100%;

        h3 {
            font-size: 1.3rem;
        }
    }
    
`
export const SlideContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const Days = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 2rem;

    @media (max-width: 1260px) {
        flex-wrap: wrap;
        justify-content: center;
    }

    @media (max-width: 768px) {
        overflow-x: auto;
        padding-bottom:1rem;

        &::-webkit-scrollbar {
            display: none; 
        }
    }
`

export const Day = styled.div`
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
    padding: 1rem;
    border-radius: 16px;
    width: 230px;
    height: 350px;
    align-items: center;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;

    &:hover {
    transform: scale(1.02);
    }

    h4 {
        font-size: 1.5rem;
        text-align: center;
        font-weight: 600;
        text-transform: capitalize;
        margin-bottom: 0.6rem;
    }

    span { 
        font-size: 3rem;
        margin-bottom: 10px;
        font-weight: bold;

        sup {
            font-size: 1.5rem;
        }
    }
`    

export const OtherStatistcs = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    gap: 10px;
    

`

export const Statistc = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;

    img {
        width: 28px;
        
    }

    span {
        font-size: 1rem;
    }

`