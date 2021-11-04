
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddToDo from './components/AddTodo';
import { EditTodo } from './components/EditTodo';
import { ToDoList } from './components/TodoList';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <div className="react-todo-App">

            <div className="container ">





              <Route exact path="/">
                <AddToDo />
                <ToDoList />
              </Route>

              <Route path="/edit/:editId">

                <EditTodo />

              </Route>




            </div>

          </div>
        </Switch>
      </Router >
    </>
  );
}

export default App;
