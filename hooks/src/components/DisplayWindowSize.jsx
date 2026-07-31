import useWindowSize from '../hooks/useWindowSize';

const DisplayWindowSize = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h2>Tamanho da Janela</h2>
      <p>Largura: {width}</p>
      <p>Altura: {height}</p>
    </div>
  );
};

export default DisplayWindowSize;