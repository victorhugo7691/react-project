import React from 'react'

const Greeting = (props) => {
  return (
    <div>
      {props.nome === "Joao" ? (
        <>
          <h1>Boas Vindas!</h1>
          <h2>{props.nome}</h2>
        </>
      ) : (
        <p>Falhou</p>
      )}
    </div>
  )
}

export default Greeting
