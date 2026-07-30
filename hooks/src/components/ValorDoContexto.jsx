import {useContext} from 'react'
import {MeuContexto} from '../contexts/MeuContexto'

const ValorDoContexto = () => {

    const {mensagem, setMensagem} = useContext(MeuContexto)
  return (
  <div>
    <p>O valor do contexto é {mensagem}</p>
    </div>
  )
}
 
export default ValorDoContexto
