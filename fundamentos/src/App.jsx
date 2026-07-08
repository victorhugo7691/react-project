import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Welcome from  './components/Welcome';
import BomDia from './components/BomDia'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>{/* Criacao de componente*/}
     <Welcome/>
     {/*Expressao jsx*/}
     <BomDia/>

    </>
   
  )
}

export default App
