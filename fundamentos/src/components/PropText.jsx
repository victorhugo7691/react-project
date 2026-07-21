const PropText = (props) => {

    const tarefas = props['prop-text'];

    if (!tarefas || tarefas.length === 0) {
        return <h2>Não há tarefas para mostrar!</h2>;
    }

    return (
    <div>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.descricao}</li>
        ))}
      </ul>
    </div>
  );
  
};

export default PropText;