import React from 'react'
import './NewExpenseForm.css'
const NewExpenseForm = () => {
    return (
        <form>
            <div className='new-expense__controls'>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="text" min="0.01" max="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="text" min="2019-01-01" max="2022-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'></button>
            </div>
        </form>
    )
}

export default NewExpenseForm
