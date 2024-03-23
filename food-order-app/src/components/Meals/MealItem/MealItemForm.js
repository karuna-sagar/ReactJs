import React, { useRef } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
const MealItemForm = () => {
    const amountInputRef = useRef();
    const submitHandler = (event) => {
        event.preventDefault();
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label="Amount"
                ref={amountInputRef}
                input={{
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm
