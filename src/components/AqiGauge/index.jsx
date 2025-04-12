import verygood from '../../assets/aqi/verygood.png';
import good from '../../assets/aqi/good.png';
import moderate from '../../assets/aqi/moderate.png';
import bad from '../../assets/aqi/bad.png';
import verybad from '../../assets/aqi/verybad.png';

import { AqiContainer, AqiText } from './styles';

const AqiImages = {
    1: verygood,
    2: good,
    3: moderate,
    4: bad,
    5: verybad
}


const getAqiLevel = (value) => {
    if(value === 1) return 'Muito Bom'
    if(value === 2) return 'Bom'
    if(value === 3) return 'Moderado'
    if(value === 4) return 'Ruim'
    if(value === 5) return 'Muito Ruim'
    return 'Desconhecido'
}


export default function AqiGauge({ aqi }) {
    const image = AqiImages[aqi]
    const aqiText = getAqiLevel(aqi)

    if(!image) return <p>Índice de qualidade do ar indisponível.</p>

    return (
        <AqiContainer>
            <p>Índice de qualidade do ar</p>
        <img 
        src={image} 
        alt={`Índice de qualidade do ar ${aqi}`} 
        style={{ width: '200px', height: '100px', marginTop: '1rem' }}
        />
        <div>
        <p>{aqi}</p>
        <AqiText level={aqi}>{aqiText}</AqiText>

        </div>
        </AqiContainer>
        
    )
}