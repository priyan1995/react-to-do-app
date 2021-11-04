import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import FirebaseDb from '../firebase';

export const EditTodo = () => {

    
    const { editId }  = useParams();

    //console.log(editId)

    const [todotem, editTodo] = useState({})

    // get data from API
    useEffect(() => {
        FirebaseDb.child(`to-do/${editId}`).on('value', snapshot => {
            if (snapshot.val() != null) {
                
                editTodo({
                    ...snapshot.val()
                   
                })
                console.log(todotem)
            }
        })
    },[])

   // ===== handle change 
   const handleEditChange = (e) => {
    editTodo({
        todoId:todotem.todoId,
        [e.target.name]:e.target.value.trim()
    })
   }


    // === submit data   
    const editTodoSubmit = (e) =>{
        e.preventDefault();
        console.log(todotem);  
        
        FirebaseDb.child(`to-do/${editId}`).set(
            todotem,
            err=>{
                if(err){
                    console.log(err)
                }
            }
        )
        
    }

    return (
        <>



            <h2>Edit Todo</h2>

            <form onSubmit={editTodoSubmit} id="editForm">
            <input
                type="text"
                name="todoItem"
                value={todotem.todoItem}
                onChange={handleEditChange}
                required
            />

            <button type="submit">Submit</button>

            </form>

        </>
    )
}
