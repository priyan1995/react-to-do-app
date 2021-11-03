import React, { useEffect, useState } from 'react'
import FirebaseDb from '../firebase';

export const ToDoList = (props) => {

    const [todos, setTodos] = useState({})


    useEffect(() => {
        FirebaseDb.child('to-do').on('value', spanshot => {
            if (spanshot.val() != null) {
                setTodos({
                    ...spanshot.val()
                })
            }
        })
    }, [])

    return (
        <>

            <h2>To Do List</h2>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Tasks</td>
                        <td>Actions</td>
                    </tr>
                </thead>

                <tbody>

                    {
                        Object.keys(todos).map(id=>{
                            return(
                                <>
                                <tr>
                                    <td >{todos[id].todoId}</td>
                                    <td >{todos[id].todoItem}</td>
                                </tr>

                                </>
                            )
                        })
                    }

                </tbody>




            </table>

        </>
    )
}