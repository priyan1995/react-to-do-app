import logo from './logo.svg';
import './App.css';
import { ToDoAdd } from './ToDoAdd';

function App() {
  return (
    <div className="react-todo-App">

      <div className="text-center">
        <h2>To Do List</h2>
      </div>

      <div className="container ">
        <ToDoAdd />
      </div>

    </div>
  );
}

export default App;
