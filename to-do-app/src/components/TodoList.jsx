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


    const onDelete = (key) =>{
        if(window.confirm('Are you sure want to delete this record ?')){
            FirebaseDb.child(`to-do/${key}`).remove(
                err => {
                    if(err){
                    console.log(err)
                    }

                }
            )
        }
    }

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
                                <tr key={id}>
                                    <td >{todos[id].todoId}</td>
                                    <td >{todos[id].todoItem}</td>
                                    <td>
                                        <a className="editbtn">Edit</a>
                                        <a className="deletebtn" onClick={ () => onDelete(id) }>Delete</a>
                                    </td>
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