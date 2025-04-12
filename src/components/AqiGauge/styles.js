import styled  from "styled-components";
import { BigCard } from "../WeatherCurrent/styles";

export const AqiContainer = styled(BigCard)`
    height: 200px;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        span {
            font-size: 1rem;
        
        }

        p {
            font-size: 1.5rem;

        }
    }
`

export const AqiText = styled.span`
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 1rem;
    color: ${({ level }) =>
        level === 1 ? '#00D06D' : // Very Good
        level === 2 ? '#9AD91D' : // Good
        level === 3 ? '#F3C600' : // Moderate
        level === 4 ? '#F59E13' : // Bad
        level === 5 ? '#F23148' : // Very Bad
        '#000000' // Unknown
    };
`;