import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/add-expense" element={<ExpenseForm />} />
          <Route path="/expenses" element={<ExpenseList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
