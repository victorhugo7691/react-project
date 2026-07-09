const Button = () => {

    const handleClick = (numero) => {
        console.log('Button clicked!', numero);
    };
        
  return <div> 
            <button onClick={() => handleClick(5)}> Click button </button> 
        </div>;
};

export default Button;