import './TodoApp.css';

import TodoItem from './components/TodoItem/TodoItem';

// En komponent startar alltid med en stor bokstav för att skilja mot
// vanliga funktioner 
function TodoApp() {
  return (
    <div className="App">
      <ul>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  )
}

export default TodoApp;
