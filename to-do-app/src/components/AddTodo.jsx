import React, { useState } from 'react'

const AddToDo = (props) => {


    const initialData = ({
        todoId: '',
        todoItem: ''
    })

    const [todo, setTodo] = useState(initialData);

    

    const todoForm = document.getElementById('todoForm');

    const handleAddTodo = (e) => {
        setTodo({
            ...todo,
            todoId: Math.floor(Math.random() * 1000),
            [e.target.name]: e.target.value.trim()
        })
    }

    const addToDo = (e) => {
        e.preventDefault()
        setTodo('');
        todoForm.reset();
        console.log(todo)
    }

     props = todo





    return (
        <>

            <h2>Add new item</h2>
            <form onSubmit={addToDo} id="todoForm">

                <input
                    type="text"
                    name="todoItem"
                    onChange={handleAddTodo}
                    required
                />

                <button type="submit">Submit</button>
            </form>

        </>
    )

}


export default AddToDo;