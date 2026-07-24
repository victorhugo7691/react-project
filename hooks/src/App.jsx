import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ExemploUseEffect from './components/ExemploUseEffect'
import Timer from './components/Timer'

function App() {

  return (
    <>
    {/*useEffect*/}
    <ExemploUseEffect />

    <Timer />
    </>
  )
}

export default App
