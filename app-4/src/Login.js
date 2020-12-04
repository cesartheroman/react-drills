import React, { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'user') {
      setUser(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleClick = () => {
    alert(`Username: ${user} Password: ${password}`);
  };

  return (
    <div className="App">
      <input
        type="text"
        name="user"
        value={user}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="password"
        value={password}
        onChange={handleChange}
      ></input>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
