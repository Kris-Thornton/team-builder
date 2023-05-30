import React, { useState } from "react";

// Change Handlers

    



// --------------------Markup that is passed to App.js for DOM----------

    const Form = (props) => {
        return (
            <form>
                <label>Name
                <input
                    placeholder='name'
                    value={values.name}
                    name='name'
                    onChange={handleChange}
                />
                </label>
                <label>Email
                <input
                    placeholder='Enter Email'
                    value={values.email}
                    name='email'
                    onChange={handleChange}
                />
                </label>
                <label>Role
                <input  
                    placeholder='Enter your role here'
                    value={values.role}
                    name='role'
                    onChange={handleChange}
                />
                </label>
                <input type='submit' value="Create your team" />
            </form>
        )
    }


export default Form;
    