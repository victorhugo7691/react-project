const NumberList = ({numbers}) => {

    //cahves-key -> identificador para cada elemento
    return (
        <ul>
            {
                numbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))
            }
        </ul>        
    );
};

export default NumberList;