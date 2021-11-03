
import './App.css';
import AddToDo from './components/AddTodo';
import TodoList from './TodoList';

function App() {
  return (
    <div className="react-todo-App">

      <div className="text-center">
        <h2>To Do List</h2>
      </div>

      <div className="container ">
        <AddToDo />
      </div>

    </div>
  );
}

export default App;
