import React from 'react'
import { useNavigate } from 'react-router-dom';
import LoginBack from '../Images/LoginBack.png'
const Login = () => {

  const Navigate = useNavigate();

  const HandleLogin = (e)=>{
    e.preventDefault();
    Navigate('/Dashboard');
  }


  return <>
  <div className="login-main">
  <div className=""></div>
  
  <form onSubmit={HandleLogin}>
  <h1>LOGIN PAGE</h1>
    <input type="text" />
    <input type="password" name="" id="" />
    <button type="submit" id='Submit'>Submit</button>
  </form>
  </div>
  </>
}

export default Login;