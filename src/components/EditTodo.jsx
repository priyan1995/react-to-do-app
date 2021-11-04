import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import FirebaseDb from '../firebase';

export const EditTodo = () => {


    const { editId } = useParams();

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
    }, [])

    // ===== handle change 
    const handleEditChange = (e) => {
        editTodo({
            todoId: todotem.todoId,
            [e.target.name]: e.target.value
        })
    }


    // === submit data   
    const editTodoSubmit = (e) => {
        e.preventDefault();
        console.log(todotem);

        FirebaseDb.child(`to-do/${editId}`).set(
            todotem,
            err => {
                if (err) {
                    console.log(err)
                }
            }
        )

    }

    return (
        <>

            <h2>Edit Todo</h2>

            <form onSubmit={editTodoSubmit} id="editForm">

                <div className="row form-group">
                    <div className="col-lg-6">
                        <input
                            className="form-control"
                            value={todotem.todoId}
                            disabled
                        />
                    </div>
                    <div className="col-lg-6">
                        <input
                            className="form-control"
                            type="text"
                            name="todoItem"
                            value={todotem.todoItem}
                            onChange={handleEditChange}
                            required
                        />
                    </div>
                    <div className="col-lg-4">
                        <button type="submit" className="btn btn-primary w-100 mt-15">Submit</button>
                    </div>
                </div>
            </form>


            <Link to="/react-to-do-app/">Back To List</Link>

        </>
    )
}
