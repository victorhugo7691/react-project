import {useState, useEffect} from 'react'

const PerfilDeUsuario = ({  usuarioId }) => {
    const {usuario, setUsuario} = useState(null);

    useEffect( () => {
        const buscarUsuario = async () => {
            const resposta = await fetch(`https:jsonplaceholder.typicode.com/users/${usuarioId}`); 
            const dadosDoUsuario = await resposta.json();
            setUsuario(dadosDoUsuario);
        }

        if(usuarioId) {
            buscarUsuario();
        }
    }, [usuarioId]);

  return (
    <div>
      {usuario ? (<div>Usuario</div>) : (<div>Carregando...</div>)}
    </div>
  )
}

export default PerfilDeUsuario
