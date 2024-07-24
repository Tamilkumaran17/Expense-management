import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';
import './Login.css';

const Login = () => {

  const {theme} = useTheme();
  return (
    <>
    <div className='topic'>
   <h2>
      Expense Management
    </h2>
    <h2>
      Expense Management
    </h2>
   </div>
    <div className={`login-container ${theme}`}>
      <h2>Login</h2>
      <form>
        <input className='user' type="email" placeholder="Email" required />
        <input className='pass' type="password" placeholder="Password" required />
        <button className='sub' type="submit">Login</button>
      </form>
      <p className='l'>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
      
    </div>
    </>
  );
};

export default Login;
