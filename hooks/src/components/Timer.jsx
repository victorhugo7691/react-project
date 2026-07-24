import { memo } from 'react';
import { useEffect, useState } from 'react';

const Timer = () => {

    const[segundos, setSegundos] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSegundos((prevSegundos) => prevSegundos + 1);
    }, 1000);

    //limpeza de intervalo
    return () => clearInterval(intervalId)
    }, []) //Array dependences vazio 

  return (
    <div>
      <h2>Timer {segundos}</h2>
    </div>
  );
};

export default memo(Timer);