import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
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
  );
};

export default Login;
