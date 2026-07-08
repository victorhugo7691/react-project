import { useState } from 'react'

const UserInfoForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Nome:', name);
        console.log('Email:', email);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Digite seu nome' value={name} onChange={(e) => setName(e.target.value)} />
            <br></br>
            <input type="email" placeholder='Digite seu email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default UserInfoForm
