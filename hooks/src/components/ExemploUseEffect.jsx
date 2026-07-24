import { useEffect, useState } from "react";

const ExemploUseEffect = () => {
    const [contador, setContador] = useState(0);

    //executar algo baseado em algo; mudança de valor, carregamento de página
    useEffect(() => {
        document.title = `Você clicou ${contador} vezes`;
    });

    return (
    <div>
      <h2>ExemploUseEffect</h2>
      <button onClick={() => setContador(contador + 1)}>Clique para somar o titulo {contador}</button>
    </div>
  );
};

export default ExemploUseEffect;