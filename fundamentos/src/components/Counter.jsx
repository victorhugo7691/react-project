import React from 'react'
import { useState } from 'react'

const Counter = () => {
            //consultar, alterar
    const [count, setCount] = useState(1);
    //Variaveis nao re-renderizam componente

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Click
      </button>
    </div>
  )
}

export default Counter
