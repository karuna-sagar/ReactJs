import React from 'react'

function ExpenseItem(props) {
    return (
        <div className='expense-item'>
            <div>{props.date.toISOString()}</div>
        </div>
    )
}

export default ExpenseItem
