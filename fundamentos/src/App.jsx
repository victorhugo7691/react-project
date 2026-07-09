import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Welcome from  './components/Welcome';
import BomDia from './components/BomDia'
import Pai from './components/Pai'
import Descricao from './components/Descricao'
import Cachorro from './components/Cachorro'
import Counter from './components/Counter'
import UserInfoForm from './components/UserInfoForm'
import Button from './components/Button'
import PaiFunction from './components/PaiFunction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>{/* Criacao de componente*/}
     <Welcome/>

     {/*Expressao jsx*/}
     <BomDia/>

     {/*Componente dentro de componente*/}
     <Pai />

     {/*Props - Variaveis dinamicas*/}
     <Descricao nome="Ronaldo" idade={22} />

     {/*Desestruturacao de props {} []*/}
     <Cachorro nome="Dog" raca="Buldog" />

     {/* useState - Estado do componente  - hook*/}
     <Counter />

     {/*Multiplos estados*/}
     <UserInfoForm />
     
     {/*Eventos*/}
     <Button />

     {/* Passando funções de manipulação de eventos como props */}
     <PaiFunction />

    </>
   
  )
}

export default App
