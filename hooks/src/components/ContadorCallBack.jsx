import React, { useState, useCallback } from 'react'

//React.memo é utilizado para memorizar o componente, ele só renderiza novamente quando as props mudam

const Botao = React.memo(({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>
});

const ContadorCallBack = () => {

  const [ contador, setContador ] = useState(0);

  const incrementar = useCallback(() => {
    setContador((contadorAnterior) => contadorAnterior + 1);
  }, []);

  return (
    <div>
      <p>Contador: {contador}</p>
      <Botao onClick={incrementar}>
        Incrementar
      </Botao>
    </div>
  )
}

export default ContadorCallBack
