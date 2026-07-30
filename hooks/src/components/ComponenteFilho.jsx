import {MeuContexto} from '../contexts/MeuContexto'
import { useContext } from 'react'

const ComponenteFilho = () => {
  const {mensagem, setMensagem} = useContext(MeuContexto) 

  return (
    <div>
      <button onClick={() => setMensagem("Nova Mensagem")}> Mudar Mensagem </button>
    </div>
  )
}

export default ComponenteFilho
