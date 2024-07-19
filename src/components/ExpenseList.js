import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/expenses')
            .then(response => setExpenses(response.data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
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
