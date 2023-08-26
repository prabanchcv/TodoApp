import React, { useState } from 'react';
import Task from './Task';
import './App.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: tasks.length + 1, text: newTask, status: 'inProgress' }]);
      setNewTask('');
    }
  };

  const completeTask = (taskId, newStatus) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };
  

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list">
      <div className="column">
        <h2>In Progress</h2>
        {tasks.map(task =>
          task.status === 'inProgress' && (
            <Task key={task.id} task={task} completeTask={completeTask}  removeTask={removeTask} />
          )
        )}
      </div>
      <div className="column">
        <h2>Completed</h2>
        {tasks.map(task =>
          task.status === 'completed' && <Task key={task.id} task={task} completeTask={completeTask}  removeTask={removeTask} />
        )}
      </div>
      <div className="column">
  <h2>Cancelled</h2>
  {tasks.map(task =>
    task.status === 'cancelled' && <Task key={task.id} task={task} completeTask={completeTask}  removeTask={removeTask} />
  )}
  
</div>
      <div className="add-task">
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
};

export default TodoList;
