import React, { useState } from 'react';
import axios from 'axios';
import "./ExpenseForm.css";
// import bg from "../assets/bg.jpg"

const ExpenseForm = () => {
    const [expense, setExpense] = useState({
        name: '',
        category: '',
        amount: '',
        date: ''
    });

    const [customCategory, setCustomCategory] = useState('');
    const [isCustomCategory, setIsCustomCategory] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExpense(prevExpense => ({ ...prevExpense, [name]: value }));
    };

    const handleCategoryChange = (e) => {
        const value = e.target.value;
        if (value === 'Others') {
            setIsCustomCategory(true);
            setExpense(prevExpense => ({ ...prevExpense, category: customCategory }));
        } else {
            setIsCustomCategory(false);
            setExpense(prevExpense => ({ ...prevExpense, category: value }));
        }
    };

    const handleCustomCategoryChange = (e) => {
        const value = e.target.value;
        setCustomCategory(value);
        setExpense(prevExpense => ({ ...prevExpense, category: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/expenses', expense)
            .then(response => console.log(response.data))
            .catch(error => console.error('Error:', error));
    };

    return (
        <div className='background'>
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h1>Expense Form</h1>
                <input className='name' type="text" name="name" value={expense.name} onChange={handleChange} placeholder="Enter your Name" />
                <select className='catt' name="category" value={expense.category} onChange={handleCategoryChange}>
                    <option value="" disabled>Select Category</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Others">Others</option>
                </select>
                {isCustomCategory && (
                    <input className='cat' type="text" value={customCategory} onChange={handleCustomCategoryChange} placeholder="Enter Custom Category" />
                )}
                <input className='amt' type="number" name="amount" value={expense.amount} onChange={handleChange} placeholder="Enter Amount" />
                <input className='date' type="date" name="date" value={expense.date} onChange={handleChange} />
                <button className='add' type="submit">Add Expense</button>
            </form>
        </div>
        </div>
    );
};

export default ExpenseForm;
