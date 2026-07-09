import React from 'react'

const LoginButton = ({loggedIn}) => {
  return (
    <div>
      {loggedIn ? (
        <button>Logout</button>
      ) : (
        <button>Fazer Login</button>
      )}
    </div>
  )
}

export default LoginButton
