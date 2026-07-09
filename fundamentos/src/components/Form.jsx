import {useState} from 'react';

const Form = () => {

    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        /*manipulação de dados, validação, 
        envio ao servido da api, loading, 
        chamada de função de mensagem ou erro*/
        event.preventDefault();
        console.log("Valor do input de formulário", value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            placeholder="Preencha" />
            <button type="submit">Enviar</button>
        </form>
    );

};

export default Form;