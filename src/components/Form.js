import React, { useState } from "react";





// --------------------Markup that is passed to App.js for DOM----------

    const Form = (props) => {


// Change Handlers

    const handleChange = evt => {
        const { name, value } = evt.target;

        props.change(name, value);
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        props.submit();
    }


        return (
            <form onSubmit={handleSubmit}>
                <label>Name
                <input
                    placeholder='name'
                    value={props.values.name}
                    name='name'
                    onChange={handleChange}
                />
                </label>
                <label>Email
                <input
                    placeholder='Enter Email'
                    value={props.values.email}
                    name='email'
                    onChange={handleChange}
                />
                </label>
                <label>Role
                <input  
                    placeholder='Enter your role here'
                    value={props.values.role}
                    name='role'
                    onChange={handleChange}
                />
                </label>
                <input type='submit' value="Create your team" />
            </form>
        )
    }


export default Form;
    