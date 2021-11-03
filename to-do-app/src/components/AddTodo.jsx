import React, { useState } from 'react'


const AddToDo = () => {

    const [todo, setTodo] = useState('');

    const todoForm = document.getElementById('todoForm');

    const handleAddTodo = (e) => {
        setTodo(e.target.value)
    }

    const addToDo = (e) => {
        e.preventDefault()      
        console.log(todo);
        setTodo('');    
        todoForm.reset(); 
        
    }

    // props.onSubmit({
    //     id: Math.floor(Math.random()*10000),
    //     text: todo
    // })

  

    return (
        <>

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