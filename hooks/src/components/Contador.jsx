import  { useReducer } from "react";

//Estado inicial da constante
const estadoInicial = { contador: 0 };

//Funcao que define como o reducer atualiza os estados 
function reducer(estado, acao) {
  switch(acao.tipo) {
    case "incrementar":
      return { contador: estado.contador + 1 };
    case "decrementar":
      return { contador: estado.contador - 1 };
    case "resetar":
      return { contador: 0 };
    default:
      throw new Error(`Ação não reconhecida: ${acao.tipo}`); 
  }
}

const Contador = () => {
  const [estado, dispatch] = useReducer(reducer, estadoInicial);

  return (
    <div>
      <p>Contador: {estado.contador}</p>
      <button onClick={() => dispatch({ tipo: "incrementar" })}>+</button>
      <button onClick={() => dispatch({ tipo: "decrementar" })}>-</button>
      <button onClick={() => dispatch({ tipo: "resetar" })}>Reset</button>
    </div>
  );
};

export default Contador;