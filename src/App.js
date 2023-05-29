import logo from './logo.svg';
import React, { useState } from 'react';
import Form from './components/Form';
import './App.css';

function App() {

  const [members, setMembers] = useState([]);
  const [values, setValues] = useState('');


  const onSubmit = (evt) => {
    console.log(setMembers)
    setMembers([values, ...members])
    
  }

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value })
    
  }

  return (
    <div>
      <h1>Name Lister</h1>
      <h3>Please Enter your first and last name below.</h3>
      <Form
        values={values}
        change={onChange}
        submit={onSubmit}

      />

      {members.map((member, idx) => {
        return (
          <div key={idx}>
            <li>
              {member.name}
          
            </li>
          </div>
        )
      })}
    </div>
  );

}

export default App;
