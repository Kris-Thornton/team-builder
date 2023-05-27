import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App() {

const [peopleList, setPeopleList] = useState({fName:'', lName:''});

const changeList = (evt => {
  setPeopleList ({...peopleList, [evt.target.fName]: evt.target.value });
  setPeopleList ({...peopleList, [evt.target.lName]: evt.target.value });
})

const handleSubmit = (evt) => {
  evt.preventDefault();
  setPeopleList({ fName:'', lName:''});
  
}
console.log(peopleList)
  return(
     <div>
      <h1>Name Lister</h1>
      <h3>Please Enter your first and last name below.</h3>
      <form onSubmit={(evt) => handleSubmit(evt)}>
        <label>
          First Name:
          <input 
          type='text'
          name = 'First Name'
          value={peopleList.fName}  
          onChange ={(evt) => changeList(evt)}
          />
        </label>
        <label>
          Last Name:
          <input 
          type='text'
          name = 'First Name'
          value={peopleList.lName}  
          onChange ={(evt) => changeList(evt)}
          /> 
        </label>
        <button>Submit</button>
      </form>
      <ul>
        <li>

        </li>
      </ul>

      </div>
  )
 
}

export default App;
