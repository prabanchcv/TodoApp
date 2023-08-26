import React from 'react';
const Task = ({ task, completeTask }) => {
  return (
    <div className={`task ${task.status}`}>
      <p>{task.text}</p>
      {task.status === 'inProgress' && (
        <button onClick={() => completeTask(task.id, 'completed')}>Complete</button>
      )}
      <button onClick={() => completeTask(task.id, 'cancelled')}>Cancel</button>
    </div>
  );
};



export default Task;
