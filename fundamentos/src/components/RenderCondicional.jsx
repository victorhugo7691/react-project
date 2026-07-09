const RenderCondicional = ({user}) => {
  return (
    <div>
      {user && <h2>Bem-vindo, {user}!</h2>}
    </div>
  );
};

export default RenderCondicional;