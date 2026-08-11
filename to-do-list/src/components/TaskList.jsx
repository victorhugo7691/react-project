import Task from './Task';

const TaskList = ({ tasks, onRemoveTask, onToggleTaskDone }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onRemove={() => onRemoveTask(task.id)} onToggleDone={() => onToggleTaskDone(task.id)} />
      ))}
      </ul>
  );
};

export default TaskList;