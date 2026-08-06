import { useState, useMemo } from 'react'
// useMemo é utilizado para evitar recalcular novamente com o mesmo valor, ele memoriza o valor e só recalcula quando o valor muda
const CalculoPesado = ({ numero }) => {

    const valorCalculado = useMemo(() => operacaoPesada(numero), [numero]);
    
  return (
    <div>
      <h2>Valor calculado: {valorCalculado}</h2>
    </div>
  )
}

const operacaoPesada = (num) => {
    console.log(`Calculando... ${num}`);
    return num * num;
}          

export default CalculoPesado;
