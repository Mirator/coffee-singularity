import { useState, useEffect } from 'react'
import './App.css'

type BrewState = 'idle' | 'brewing' | 'complete'

function App() {
  const [brewState, setBrewState] = useState<BrewState>('idle')
  const [brewCount, setBrewCount] = useState(0)
  const [progress, setProgress] = useState(0)

  const handleBrew = () => {
    if (brewState === 'idle') {
      setBrewState('brewing')
      setProgress(0)
    }
  }

  useEffect(() => {
    if (brewState === 'brewing') {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setBrewState('complete')
            setBrewCount(count => count + 1)
            setTimeout(() => setBrewState('idle'), 2000)
            return 100
          }
          return prev + 2
        })
      }, 100)

      return () => clearInterval(interval)
    }
  }, [brewState])

  const getButtonText = () => {
    switch (brewState) {
      case 'brewing':
        return `Brewing... ${Math.round(progress)}%`
      case 'complete':
        return '☕ Ready!'
      default:
        return '☕ Brew Coffee'
    }
  }

  const getButtonClass = () => {
    const baseClass = 'brew-button'
    switch (brewState) {
      case 'brewing':
        return `${baseClass} brewing`
      case 'complete':
        return `${baseClass} complete`
      default:
        return baseClass
    }
  }

  return (
    <div className="app">
      <div className="brew-container">
        <h1 className="app-title">☕ Coffee Brewery</h1>
        
        <div className="brew-stats">
          <div className="stat">
            <span className="stat-number">{brewCount}</span>
            <span className="stat-label">Cups Brewed</span>
          </div>
        </div>

        <div className="brew-section">
          <button 
            className={getButtonClass()}
            onClick={handleBrew}
            disabled={brewState !== 'idle'}
          >
            {getButtonText()}
          </button>
          
          {brewState === 'brewing' && (
            <div className="progress-container">
              <div 
                className="progress-bar" 
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>

        <div className="coffee-animation">
          {brewState === 'brewing' && (
            <div className="steam">
              <div className="steam-line"></div>
              <div className="steam-line"></div>
              <div className="steam-line"></div>
            </div>
          )}
          <div className="coffee-cup">☕</div>
        </div>
      </div>
    </div>
  )
}

export default App
