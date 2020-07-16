import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'


const Login = () => {
	
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loggedIn, setLoggedIn] = useState(false);
	const [fetchUsername, setFetchUsername] = useState('');
	const [fetchPassword, setFetchPassword] = useState('');
	const [showError, setShowError] = useState(false)
	
	useEffect(() => {
    axios.get("http://localhost:4001/auth").then(function (response) {
      setFetchUsername(response.data.name);
      setFetchPassword(response.data.password);
    });
  }, [setFetchUsername, setFetchPassword]);
	     
  const onChangeName = (e) => {
    setUsername(e.target.value);
	}
	const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const submitForm = (e) => {
    e.preventDefault();
    
    if (username === fetchUsername && password === fetchPassword && username !== '' && password !== '') {
      localStorage.setItem("token", "qwerty");
      setLoggedIn(true);
    } else {
			setShowError(true)
		}
  }
  
  if (loggedIn) {
    return <Redirect to="/admin" />;
	}
	
  return (
    <div className="form">
      <h1>login</h1>
      <form onSubmit={submitForm}>
        {showError && <div className="warning">Неверно введен логин или пароль</div>}
        <input
          className="entry"
          type="text"
          placeholder="username"
          name="username"
          value={username}
          onChange={onChangeName}
        />
        <br /> 
        <input
          className="entry"
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={onChangePassword}
        />
        <br /> 
        <input type="submit" className="btn" />
      </form>
    </div>
  );
  
}

export default Login
