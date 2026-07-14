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
import Form from './components/Form'
import RenderCondicional from './components/RenderCondicional'
import LoginButton from './components/LoginButton'
import Warning from './components/Warning'
import NumberList from './components/NumberList'
import BotaoEstilizado from './components/BotaoEstilizado'
import BotaoAzul from './components/BotaoAzul'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Criacao de componente*/}
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

     {/*Eventos de form*/}
     <Form />

     {/*Renderização condicional*/}
     <RenderCondicional user="Cariani" />

    {/*Expressão ternária*/}
    <LoginButton loggedIn={false} />

    {/*Render nulo*/}
    <Warning warning = "true"/>

    {/*Listas chaves */}
    <NumberList numbers = {[1, 2, 3, 4, 5, 6]} />
    
    {/*Estilo por atributo*/}
    <BotaoEstilizado />

    {/*Estilos globais*/}
    <BotaoAzul />

    </>  
  )
}

export default App
