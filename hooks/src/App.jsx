import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ExemploUseEffect from './components/ExemploUseEffect'
import Timer from './components/Timer'
import { MeuContextoProvider } from './contexts/MeuContexto'
import ComponenteFilho from './components/ComponenteFilho'
import ValorDoContexto from './components/ValorDoContexto'
import Contador from './components/Contador'
import DisplayWindowsSize from './components/DisplayWindowsSize' 

function App() {

  return (
    <>
    {/*useEffect*/}
    <ExemploUseEffect />

    <Timer />
    
    {/*UseContext*/}
    <MeuContextoProvider>
      <ComponenteFilho />
      <ValorDoContexto />2
    </MeuContextoProvider> 

    {/*UseReducer Estados mais complexos*/}
    <Contador />

    {/*Custom hook para chamada de api*/}
    <DisplayWindowsSize />

    {/*Slots e children props */}


    </>
  )
}

export default App
