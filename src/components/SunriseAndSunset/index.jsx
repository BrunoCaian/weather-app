import { useState, useEffect } from "react"
import { SunriseAndSunsetContainer } from "./styles"

export default function SunriseAndSunset({ sunrise, sunset }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const now = new Date().getTime()
      const start = sunrise 
      const end = sunset 
      const ratio = Math.min(Math.max((now - start) / (end - start), 0), 1)
      setProgress(ratio)
    }

    updateProgress()
    const interval = setInterval(updateProgress, 1000 * 60)
    return () => clearInterval(interval)
  }, [sunrise, sunset])

  const radius = 100
  const angle = progress * Math.PI
  const x = radius * Math.cos(angle - Math.PI)
  const y = radius * Math.sin(angle - Math.PI)
  const sunX = x + 110
  const sunY = y + 100

  const formatTime = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <SunriseAndSunsetContainer>
      <p>Nascer e pôr do sol</p>
      <svg width="220" height="120">
        <path
          d="M10,100 A100,100 0 0,1 210,100"
          fill="none"
          stroke="#ccc"
          strokeWidth="2"
          strokeDasharray="5,5"
        />
        <path
          d={`M10,100 A100,100 0 0,1 ${sunX},${sunY}`}
          fill="none"
          stroke="gold"
          strokeWidth="2"
        />
        <circle cx={sunX} cy={sunY} r="10" fill="orange" />
        <line x1="10" y1="100" x2="210" y2="100" stroke="#aaa" strokeWidth="2" />
        <line x1="10" y1="95" x2="10" y2="105" stroke="gold" strokeWidth="2" />
        <line x1="210" y1="95" x2="210" y2="105" stroke="gold" strokeWidth="2" />
      </svg>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '220px',
      }}>
        <div style={{ textAlign: 'center' }}>
          <span style={{ color: 'gold', fontSize: '0.8rem'}}>{formatTime(sunrise)}</span><br />
          <small style={{ color: '#aaa', fontSize: '12px'}}>Nascer</small>
        </div>
        <div style={{ textAlign: 'center' }}>
          <span style={{ color: 'gold', fontSize: '0.8rem' }}>{formatTime(sunset)}</span><br />
          <small style={{ color: '#aaa', fontSize: '12px' }}>Pôr</small>
        </div>
      </div>
    </SunriseAndSunsetContainer>
  )
}