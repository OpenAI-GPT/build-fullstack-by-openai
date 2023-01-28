import React, { useState } from 'react';
import axios from 'axios';
import WelcomePage from './Welcome';
import './App.css';
import { useNavigate, Route, Routes } from 'react-router-dom';

 function App(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:3000/', {username, password})
      .then((res) => {
        console.log(res);
        navigate('/welcome');
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
      <Routes>
        <Route path = "/welcome" element = {  <WelcomePage {...props} username = { username } /> } />
        <Route path = "/" element = { <h1> Welcome to the Game! </h1> } />
      </Routes>
   
    <form onSubmit = { handleSubmit } action = '/welcome' >
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
