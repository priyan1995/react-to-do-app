import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import FirebaseDb from '../firebase';

export const EditTodo = () => {

    
    const { editId }  = useParams();

    //console.log(editId)

    const [todotem, editTodo] = useState({})

    useEffect(() => {
        FirebaseDb.child(`to-do/${editId}`).on('value', snapshot => {
            if (snapshot.val() != null) {
                
                editTodo({
                    ...snapshot.val()
                   
                })
               // console.log(todotem)
            }
        })
    },[])

    return (
        <>



            <h2>Edit Todo</h2>

            {/* <form onSubmit={editTodo} id="editForm">
            <input
                type="text"
                name="todoItem"
                onChange={}
                value={}
            />

            </form> */}

        </>
    )
}
