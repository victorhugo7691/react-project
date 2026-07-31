import {useState, useEffect} from 'react'

export default function useWindowSize(){
    const [windowSize, setWindow_size] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {//Funcao que altera os valores de windowSize quando a janela é redimensionada
        function handleResize() {
            setWindow_size({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        //Evento que dispara a função de redimensionamento
        window.addEventListener('resize', handleResize);
        handleSize(); // Chamada inicial para definir o tamanho da janela
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};