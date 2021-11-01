import React, {useState} from 'react'
import { ToDoAdd } from './ToDoAdd';

function TodoList (){

    const [todos, setTodos] = useState([]);
 
    return(
        <>

        <ToDoAdd />

        </>
    )

}


export default TodoList;