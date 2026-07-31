import useWindowsSize from '../hooks/useWindowsSize';

const DisplayWindowsSize = () => {
  const [width, height] = useWindowsSize();

  return (
    <div>
      <h2>Tamanho da Janela</h2>
      <p>Largura: {width}</p>
      <p>Altura: {height}</p>
    </div>
  );
};

export default DisplayWindowsSize;