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
import DisplayWindowSize from './components/DisplayWindowSize'
import Container from './components/Container'

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
    <DisplayWindowSize />

    {/*Slots e children props */}
    <Container>
      <h1>Titulo da secao</h1>
      <p>Subtítulo </p>
    </Container>


    </>
  )
}

export default App
