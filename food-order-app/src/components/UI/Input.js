import React from 'react'
import classes from './Input.module.css'
const Input = (props) => {
    return (
        <div className={classes.form}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input>{...props.input}</input>
        </div>
    )
}

export default Input
