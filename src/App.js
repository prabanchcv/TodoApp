import React from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
     <div className="App" style={{ textAlign: 'center', padding: '20px', backgroundColor: '#007bff', color: '#fff', borderBottom: '2px solid #0056b3' }}>
  <h1 style={{ margin: '0', padding: '10px 0', fontSize: '24px' }}>Todo App</h1>

    </div>

      <TodoList />
    </div>
  );
}

export default App;
