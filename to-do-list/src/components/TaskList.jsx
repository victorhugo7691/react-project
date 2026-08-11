import Task from './Task';

const TaskList = ({ tasks, onRemoveTask, onToggleTaskDone }) => {

if (tasks.length === 0) {
    return <p>Nenhuma tarefa cadastrada.</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onRemove={() => onRemoveTask(task.id)} onToggleDone={() => onToggleTaskDone(task.id)} />
      ))}
      </ul>
  );
};

export default TaskList;