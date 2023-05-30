import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
export default function App() {

const [members, setMembers] = useState([]);
const [values, setValues] = useState({name: '', email: '', role: ''})


const onChange = (name, value) => {
  setValues({ ...values, [name]: value})
}


const onSubmit = () => {
  setMembers([values, ...members]);
  setValues({name: '', email: '', roll: ''})

}



  return (
    <div className='App'>
      <h1>Team Builder App</h1>
      <Form 
      values={values}
      change={onChange}
      submit={onSubmit}
      />
      {members.map((member, idx) => {
        return (
          <div key={idx}>
            {member.email}, {member.name}, {member.role}
          </div>
        )
      })}
    </div>
  );
}