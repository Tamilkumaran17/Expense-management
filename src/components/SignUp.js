import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <input className='username' type="text" placeholder="Name" required />
        <input className='email' type="email" placeholder="Email" required />
        <input className='password' type="password" placeholder="Password" required />
        <button className='submit' type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
