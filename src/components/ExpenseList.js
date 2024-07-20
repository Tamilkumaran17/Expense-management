import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTheme } from '../components/ThemeContext';
import '../components/ExpenseList.css';

const ExpenseList = () => {
    const { theme } = useTheme();
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/expenses')
            .then(response => setExpenses(response.data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div className={`expense-list-container ${theme}`}>
            <h2>Expenses</h2>
            <ul>
                {expenses.map(expense => (
                    <li key={expense.id}>{expense.name} - {expense.category} - ${expense.amount} - {expense.date}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;
