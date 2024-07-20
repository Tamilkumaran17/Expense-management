import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import './App.css';


const ToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
      <button className="toggle-button" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? <FaMoon className='moon'/> : <FaSun className='sun'/>}
      </button>
  );
};

function App() {
  return (
    <ThemeProvider>
    <Router>
      <div className="App">
        <ToggleButton/>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/add-expense" element={<ExpenseForm />} />
          <Route path="/expenses" element={<ExpenseList />} />
        </Routes>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
