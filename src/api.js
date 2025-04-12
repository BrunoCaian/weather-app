export const fetchCoordinates = async (apiKey, city) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`        
        )

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`)
        }

        const data = await response.json()

        if (!data || data.length === 0) {
            throw new Error('Cidade não encontrada')
        }

        const { lat, lon, name, state, country } = data[0]
        return { lat, lon, name, state, country } 
    } catch (error) {
        console.error('Erro ao buscar as coordenadas:', error.message)
        throw error
    }
}

export const fetchWeatherData = async (apiKey, lat, lon) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=pt_br`)
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error('Erro ao buscar dados do clima: ' + error.message)
    }
}

export const fetchForecastData = async (apiKey, lat, lon) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=pt_br`)
        const data = await response.json()
        console.log('Forecast:', data)
        return data.list
    } catch (error) {
        throw new Error('Erro ao buscar dados dos próximos 5 dias: ' + error.message)
    }
}

export const fetchAirQualityData = async (apiKey, lat, lon) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`)
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error('Erro ao buscar dados da qualidadedo ar: ' + error.message)
    }
}
