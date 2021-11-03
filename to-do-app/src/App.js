
import './App.css';
import AddToDo from './components/AddTodo';
import { ToDoList } from './components/TodoList';

function App() {
  return (
    <div className="react-todo-App">

      <div className="text-center">
      </div>

      <div className="container ">
        <AddToDo />
        <ToDoList />
      </div>

    </div>
  );
}

export default App;
