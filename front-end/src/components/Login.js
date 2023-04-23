import React from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    fetch('http://localhost:3000/teacher/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => res.json())
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response?.user));
        navigate('/teacher/subjects');
      })
  };
  return (
    <div className="login">
      <label htmlFor="email">Email:</label>
      <input type="text" name="email" id="email" />
      <label htmlFor="password">Password:</label>
      <input type="text" name="password" id="password" />
      <button type="submit" onClick={() => handleClick()}>
        Login
      </button>
    </div>
  );
};

export default Login;
