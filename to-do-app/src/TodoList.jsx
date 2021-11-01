import React, {useState} from 'react'
import { ToDoAdd } from './ToDoAdd';

function TodoList (){

    const [todos, setTodos] = useState([]);
    
    const addTodo = todo => {

        const newTodos = [todo, ...todos]

        setTodos(newTodos);
    
        console.log(...todos);

    }
 
 
    return(
        <>

        <ToDoAdd  onSubmit={addTodo}/>

        </>
    )

}


export default TodoList;