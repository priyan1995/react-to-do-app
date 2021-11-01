
import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="react-todo-App">

      <div className="text-center">
        <h2>To Do List</h2>
      </div>

      <div className="container ">
        <TodoList />
      </div>

    </div>
  );
}

export default App;
