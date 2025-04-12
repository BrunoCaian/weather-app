import styled from "styled-components";

export const WeatherContainer = styled.section`
    background: linear-gradient(135deg, #0f1a2b, #1e3c72);
    background-size: cover;
    background-position: center;
    padding: 15px;
    
    @media (max-width: 500px) {
        background-position: center;
        background-size: cover;
        padding: 0;
    }

`

export const TopSection = styled.section`
    display: flex;
    gap: 1rem;

    @media (max-width: 900px) {
        display: block;
    }
    
`

export const BottomSection = styled.section`
    width: 100%

`
