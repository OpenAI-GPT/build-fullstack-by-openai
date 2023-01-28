import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

 function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:3000/', {username, password})
      .then((res) => {
        console.log(res);
      })
      .catch( err => {
        console.log(err);
      })
  }

  const handleUsernameChange = e => {
    setUsername(e.target.value);
  };    

  const handlePasswordChange = e => {
    setPassword(e.target.value);
   };

  return (
    <div className="App">
    <h1>Wel to the Game!</h1>
    <form onSubmit = { handleSubmit } >
      <label>
        Username:
        <input type = 'text' value = { username } onChange = { handleUsernameChange } />
      </label>
      <br />
      <label>
        Password:
        <input type = 'text' value = { password } onChange = { handlePasswordChange } />
      </label>
      <br />
      <button type = "submit" > Submit </button>
    </form>
    </div>
  );
}

export default App;
