import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState({
    id: '',
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  });

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users/2')
      .then(({ data }) => {
        const realData = data.data;
        setData({
          id: realData.id,
          email: realData.email,
          first_name: realData.first_name,
          last_name: realData.last_name,
          avatar: realData.avatar,
        });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <img src={data.avatar}></img>
      <h1>
        Name: {data.first_name} {data.last_name}
      </h1>
      <h1>Id: {data.id}</h1>
      <h1>Email: {data.email}</h1>
    </div>
  );
}

export default App;
