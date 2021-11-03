import React, { useState } from 'react'
import FirebaseDb from '../firebase';

const AddToDo = () => {


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

        // props.addOrEdit(todo)

        FirebaseDb.child('to-do').push(
            todo,
            err => {
                if (err)
                    console.log(err)
            }
        )
    }







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