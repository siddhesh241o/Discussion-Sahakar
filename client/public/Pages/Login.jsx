import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginBack from '../Images/LoginBack.png';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/Dashboard');
  };

  return (
    <>
      <div className="login-main">
        <div className=""></div>
        
        <form onSubmit={handleLogin}>
          <h1 className="text-2xl font-bold mb-4">LOGIN </h1>
          <input
            type="text"
            placeholder="Enter Username"
            className="mb-1 p-2 border border-gray-300 rounded w-full"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="mb-4 p-2 border border-gray-300 rounded w-full"
          />
          <button
            type="submit" 
            id="Submit"
            className="p-2 bg-blue-500 text-white rounded w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
