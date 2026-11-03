import { useEffect, useState } from 'react'
import './Loader.css'

const Loader = () => {
  const [phase, setPhase] = useState('loading')

  useEffect(() => {
    // Fast, elegant splash that doesn't block or frustrate the user
    const exitTimer = setTimeout(() => setPhase('exiting'), 400)
    const doneTimer = setTimeout(() => {
      setPhase('done')
    }, 750)
    return () => {
      clearTimeout(exitTimer)
      clearTimeout(doneTimer)
    }
  }, [])

  if (phase === 'done') return null

  return (
    <div className={`loader ${phase === 'exiting' ? 'is-exiting' : ''}`}>
      <div className="loader-inner">
        <div className="loader-logo">
          ÉCORCE
          <span>.</span>
          <svg className="loader-logo-leaf" width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M4 20c0-8 6-14 14-14 0 8-6 14-14 14Z" fill="#4CAF50" />
          </svg>
        </div>
        <div className="loader-bar">
          <div className="loader-bar-fill" />
        </div>
      </div>
    </div>
  )
}

export default Loader
