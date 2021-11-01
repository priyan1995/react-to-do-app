import React, { useState } from 'react'

export const ToDoAdd = (props) => {

    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        console.log('submitted');

        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
        });

        setInput('');

    };




    return (
        <>


            <form className='form-control' onSubmit={handleSubmit}>

                <input
                    type='text'
                    placeholder='add a to-do'
                    value={input}
                    name='todoval'
                    onChange={handleChange}
                />

                <button type='submit'>Submit</button>

            </form>




        </>
    )
}