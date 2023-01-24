import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoApp from './TodoApp';
import './index.css';

// Kopplar React till ett specifikt element i HTML:en där vår app körs
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
)
