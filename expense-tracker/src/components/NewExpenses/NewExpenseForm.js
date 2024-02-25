import React, { useState } from 'react'
import './NewExpenseForm.css'
const NewExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        setEnteredAmount('')
        setEnteredTitle('')
        setEnteredDate('')
        console.log(expenseData);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className="new-expense__control" value={enteredTitle} onChange={titleChangeHandler}>
                    <label>Title</label>
                    <input type="text" />
                </div>
                <div className="new-expense__control" value={enteredAmount} onChange={amountChangeHandler}>
                    <label>Amount</label>
                    <input type="text" min="0.01" max="0.01" />
                </div>
                <div className="new-expense__control" value={enteredDate} onChange={dateChangeHandler}>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default NewExpenseForm
