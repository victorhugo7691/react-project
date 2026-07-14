import React from 'react'

const BotaoEstilizado = () => {
    //class se torna className
	//for se torna hotmlFor

    const estiloBotao = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }

  return (
    <div>
      <button style = {estiloBotao}>Botão Estilizado</button>
    </div>
  )
}

export default BotaoEstilizado