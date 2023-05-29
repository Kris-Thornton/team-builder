import React, {useState} from 'react';

export default function Form  (props)  {

    // const [peopleList, setPeopleList] = useState({fName:'', lName:''});


    const changeList = evt => {
        const { name, value } = evt.target;

        props.change(name, value);
      }


    const handleSubmit = evt => {
        evt.preventDefault();
        props.submit();
        
    
      }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type='text'
                        name='First Name'
                        value={props.values.name}
                        onChange={changeList}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type='text'
                        name='Last Name'
                        value={props.values.name}
                        onChange={changeList}
                    />
                </label>
                <input type='submit' value='Add to List!' />
            </form>
            <ul>
                
            </ul>
        </div>

    )
}